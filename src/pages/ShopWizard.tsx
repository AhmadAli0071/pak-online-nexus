import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ShopData } from '@/types/shop';

// Step Components
import ShopInformationStep from '@/components/wizard-steps/ShopInformationStep';
import BusinessCategoriesStep from '@/components/wizard-steps/BusinessCategoriesStep';
import ShopMediaStep from '@/components/wizard-steps/ShopMediaStep';
import SocialContactStep from '@/components/wizard-steps/SocialContactStep';
import ProductListingStep from '@/components/wizard-steps/ProductListingStep';
import ReviewSubmitStep from '@/components/wizard-steps/ReviewSubmitStep';

const STEPS = [
  { id: 1, title: 'Shop Information', description: 'Basic shop details' },
  { id: 2, title: 'Business Categories', description: 'Select your categories' },
  { id: 3, title: 'Shop Media', description: 'Upload logo & banner' },
  { id: 4, title: 'Social & Contact', description: 'Connect your socials' },
  { id: 5, title: 'Product Listing', description: 'Add your products' },
  { id: 6, title: 'Review & Submit', description: 'Final review' },
];

const ShopWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shopData, setShopData] = useState<ShopData>({
    shopName: '',
    city: '',
    shopType: '',
    shopDescription: '',
    categories: [],
    shopLogo: null,
    shopBanner: null,
    logoPreview: '',
    bannerPreview: '',
    facebookUrl: '',
    instagramHandle: '',
    whatsappNumber: '',
    websiteUrl: '',
    products: [],
    acceptTerms: false,
  });

  const { toast } = useToast();

  const updateShopData = (updates: Partial<ShopData>) => {
    setShopData(prev => ({ ...prev, ...updates }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(shopData.shopName && shopData.city && shopData.shopType && shopData.shopDescription);
      case 2:
        return shopData.categories.length > 0;
      case 3:
        return !!(shopData.shopLogo && shopData.shopBanner);
      case 4:
        return !!(shopData.whatsappNumber);
      case 5:
        return shopData.products.length > 0;
      case 6:
        return shopData.acceptTerms;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateStep(6)) {
      toast({
        title: "Validation Error",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Shop Created Successfully!",
      description: "Your marketplace shop has been created and is now live.",
    });

    console.log('Shop Data:', shopData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ShopInformationStep data={shopData} updateData={updateShopData} />;
      case 2:
        return <BusinessCategoriesStep data={shopData} updateData={updateShopData} />;
      case 3:
        return <ShopMediaStep data={shopData} updateData={updateShopData} />;
      case 4:
        return <SocialContactStep data={shopData} updateData={updateShopData} />;
      case 5:
        return <ProductListingStep data={shopData} updateData={updateShopData} />;
      case 6:
        return <ReviewSubmitStep data={shopData} updateData={updateShopData} />;
      default:
        return null;
    }
  };


  const progressPercentage = (currentStep / STEPS.length) * 100;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-marketplace-accent bg-clip-text text-transparent mb-2">
            Create Your Shop
          </h1>
          <p className="text-muted-foreground text-lg">
            Set up your digital marketplace presence in just a few steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {STEPS.length}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8 overflow-x-auto">
          {STEPS.map((step, index) => {
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center min-w-0 flex-1 ${
                  index < STEPS.length - 1 ? 'relative' : ''
                }`}
              >
                {/* Connector Line */}
                {index < STEPS.length - 1 && (
                  <div
                    className={`absolute top-6 left-1/2 w-full h-0.5 -translate-y-1/2 transition-colors duration-300 ${
                      isCompleted ? 'bg-step-completed' : 'bg-muted'
                    }`}
                    style={{ left: '50%', right: '-50%' }}
                  />
                )}
                
                {/* Step Circle */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 mb-2 ${
                    isCompleted
                      ? 'bg-step-completed border-step-completed text-white'
                      : isCurrent
                      ? 'bg-step-active border-step-active text-white'
                      : 'bg-background border-step-pending text-step-pending'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                
                {/* Step Info */}
                <div className="text-center">
                  <h3 className={`text-sm font-medium transition-colors duration-300 ${
                    isCurrent ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden sm:block mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {STEPS[currentStep - 1].title}
              </h2>
              {renderStepContent()}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {currentStep < 6 ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-marketplace-accent hover:opacity-90"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-gradient-to-r from-marketplace-success to-primary hover:opacity-90"
            >
              Create Shop
              <CheckCircle2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopWizard;
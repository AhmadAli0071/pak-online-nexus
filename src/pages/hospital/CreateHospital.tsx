import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Users, Stethoscope, FileText, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import HospitalInformationStep from '@/components/hospital-wizard/HospitalInformationStep'
import MedicalSpecialtiesStep from '@/components/hospital-wizard/MedicalSpecialtiesStep'
import StaffCapacityStep from '@/components/hospital-wizard/StaffCapacityStep'
import ReviewSubmitStep from '@/components/hospital-wizard/ReviewSubmitStep'

const steps = [
  { id: 1, title: 'Hospital Information', icon: Building2 },
  { id: 2, title: 'Medical Specialties', icon: Stethoscope },
  { id: 3, title: 'Staff & Capacity', icon: Users },
  { id: 4, title: 'Review & Submit', icon: FileText }
]

export default function CreateHospital() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [hospitalData, setHospitalData] = useState({
    // Step 1: Hospital Information
    hospitalName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    hospitalType: '',
    licenseNumber: '',
    establishedYear: '',
    description: '',
    website: '',
    
    // Step 2: Medical Specialties
    specialties: [] as string[],
    emergencyServices: false,
    ambulanceService: false,
    labServices: false,
    radiologyServices: false,
    pharmacyServices: false,
    
    // Step 3: Staff & Capacity
    totalBeds: '',
    icuBeds: '',
    emergencyBeds: '',
    totalDoctors: '',
    nursingStaff: '',
    supportStaff: '',
    operatingRooms: '',
    
    // Step 4: Additional Info
    insuranceAccepted: [] as string[],
    paymentMethods: [] as string[],
    visitingHours: '',
    contactPerson: '',
    certifications: [] as string[]
  })

  const updateHospitalData = (stepData: Partial<typeof hospitalData>) => {
    setHospitalData(prev => ({ ...prev, ...stepData }))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Here you would typically submit the data to your backend
    console.log('Hospital Registration Data:', hospitalData)
    // Show success message and redirect
    navigate('/hospital')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <HospitalInformationStep
            data={hospitalData}
            onUpdate={updateHospitalData}
            onNext={handleNext}
          />
        )
      case 2:
        return (
          <MedicalSpecialtiesStep
            data={hospitalData}
            onUpdate={updateHospitalData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )
      case 3:
        return (
          <StaffCapacityStep
            data={hospitalData}
            onUpdate={updateHospitalData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )
      case 4:
        return (
          <ReviewSubmitStep
            data={hospitalData}
            onUpdate={updateHospitalData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        )
      default:
        return null
    }
  }

  const currentStepData = steps.find(step => step.id === currentStep)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/hospital')}
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Hospitals
          </Button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Register Your Hospital
            </h1>
            <p className="text-muted-foreground">
              Join our healthcare network and connect with patients across Pakistan
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      currentStep >= step.id
                        ? 'bg-red-600 border-red-600 text-white'
                        : currentStep === step.id
                        ? 'border-red-600 text-red-600 bg-background'
                        : 'border-muted text-muted-foreground bg-background'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-colors ${
                        currentStep > step.id ? 'bg-red-600' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}: {currentStepData?.title}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-2">
                {currentStepData && <currentStepData.icon className="h-6 w-6 text-red-600" />}
                {currentStepData?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderStep()}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
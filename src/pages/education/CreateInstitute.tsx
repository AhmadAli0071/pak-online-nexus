import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Upload, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'

const steps = [
  "Basic Information",
  "Contact Details", 
  "Media & Branding",
  "Courses & Programs",
  "Review & Submit"
]

export default function CreateInstitute() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [courses, setCourses] = useState<string[]>([])
  const [newCourse, setNewCourse] = useState("")

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse.trim()])
      setNewCourse("")
    }
  }

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Institute Name *</Label>
                <Input id="name" placeholder="Enter institute name" />
              </div>
              <div>
                <Label htmlFor="type">Institute Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="institute">Institute</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your institute, its mission, and what makes it unique"
                className="min-h-32"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="established">Year Established</Label>
                <Input id="established" type="number" placeholder="e.g. 1984" />
              </div>
              <div>
                <Label htmlFor="students">Number of Students</Label>
                <Input id="students" placeholder="e.g. 5000" />
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" placeholder="+92-xxx-xxxxxxx" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="contact@institute.edu.pk" />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Complete Address *</Label>
              <Textarea 
                id="address" 
                placeholder="Enter complete address with city and postal code"
                className="min-h-24"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="city">City *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    <SelectItem value="multan">Multan</SelectItem>
                    <SelectItem value="peshawar">Peshawar</SelectItem>
                    <SelectItem value="quetta">Quetta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" placeholder="https://www.institute.edu.pk" />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Institute Logo *</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Upload your institute logo</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
                <Button variant="outline" className="mt-4">
                  Choose File
                </Button>
              </div>
            </div>

            <div>
              <Label>Banner Image *</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Upload a banner image of your institute</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB (Recommended: 1200x600px)</p>
                <Button variant="outline" className="mt-4">
                  Choose File
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="color">Brand Color</Label>
                <Input id="color" type="color" className="h-12" />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" placeholder="Your institute's tagline" />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Courses & Programs *</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  placeholder="Enter course name"
                  onKeyPress={(e) => e.key === 'Enter' && addCourse()}
                />
                <Button onClick={addCourse} type="button">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {courses.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {courses.map((course, index) => (
                    <Badge key={index} variant="secondary" className="gap-2">
                      {course}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => removeCourse(index)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="specialization">Main Specialization *</Label>
                <Input id="specialization" placeholder="e.g. Engineering, Business, Medicine" />
              </div>
              <div>
                <Label htmlFor="admission-status">Admission Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="coming-soon">Coming Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="facilities">Facilities</Label>
              <Textarea 
                id="facilities" 
                placeholder="List your institute's facilities (Library, Labs, Sports, etc.)"
                className="min-h-24"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Review Your Information</h3>
              <p className="text-muted-foreground">
                Please review all the information before submitting your institute
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Basic Information</h4>
                    <p className="text-muted-foreground">Institute details and description</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Contact Details</h4>
                    <p className="text-muted-foreground">Phone, email, and address information</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Media & Branding</h4>
                    <p className="text-muted-foreground">Logo, banner, and brand elements</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Courses & Programs</h4>
                    <p className="text-muted-foreground">{courses.length} courses added</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to our terms and conditions. 
                Your institute will be reviewed by our team before being published.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/education')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Create Institute Profile</h1>
              <p className="text-muted-foreground">Share your educational institute with students</p>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${index <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {index + 1}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className={`text-sm font-medium ${
                      index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-4 ${
                      index < currentStep ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep]}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {renderStepContent()}
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-between mt-8"
          >
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button className="bg-primary hover:bg-primary/90">
                Submit Institute
              </Button>
            ) : (
              <Button onClick={nextStep}>
                Next
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
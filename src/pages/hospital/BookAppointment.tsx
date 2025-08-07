import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Phone, FileText, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'
import { format } from 'date-fns'

// Mock data for hospital and doctors
const hospitalData = {
  id: 1,
  name: "Shaukat Khanum Memorial Cancer Hospital",
  image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=200&fit=crop",
  address: "7-A, Block R-3, Johar Town, Lahore"
}

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Medical Oncology",
    image: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=150&h=150&fit=crop&crop=face",
    experience: "15 years",
    rating: 4.9,
    consultationFee: "Rs. 3,000"
  },
  {
    id: 2,
    name: "Dr. Muhammad Hassan",
    specialty: "Surgical Oncology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    experience: "18 years",
    rating: 4.8,
    consultationFee: "Rs. 3,500"
  },
  {
    id: 3,
    name: "Dr. Fatima Khan",
    specialty: "Radiation Oncology", 
    image: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=150&h=150&fit=crop&crop=face",
    experience: "12 years",
    rating: 4.7,
    consultationFee: "Rs. 2,800"
  }
]

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
]

export default function BookAppointment() {
  const { hospitalId } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [appointmentData, setAppointmentData] = useState({
    doctorId: '',
    date: '',
    time: '',
    patientName: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    appointmentType: '',
    symptoms: '',
    previousVisit: false
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }))
  }

  const selectedDoctor = doctors.find(doctor => doctor.id.toString() === appointmentData.doctorId)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Here you would submit the appointment data
    console.log('Appointment Data:', appointmentData)
    setCurrentStep(4) // Success step
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(`/hospital/${hospitalId}`)}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Hospital
        </Button>

        {/* Hospital Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={hospitalData.image}
                  alt={hospitalData.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{hospitalData.name}</h1>
                  <p className="text-muted-foreground">{hospitalData.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {currentStep < 4 && (
          /* Progress Indicator */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      currentStep >= step
                        ? 'bg-red-600 border-red-600 text-white'
                        : 'border-muted text-muted-foreground bg-background'
                    }`}
                  >
                    {step === 1 && <User className="h-5 w-5" />}
                    {step === 2 && <Calendar className="h-5 w-5" />}
                    {step === 3 && <FileText className="h-5 w-5" />}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-colors ${
                        currentStep > step ? 'bg-red-600' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of 3: {
                  currentStep === 1 ? 'Select Doctor' : 
                  currentStep === 2 ? 'Choose Date & Time' : 
                  'Patient Information'
                }
              </p>
            </div>
          </motion.div>
        )}

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>
                {currentStep === 1 && 'Select Doctor'}
                {currentStep === 2 && 'Choose Date & Time'}
                {currentStep === 3 && 'Patient Information'}
                {currentStep === 4 && 'Appointment Confirmed!'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Step 1: Select Doctor */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {doctors.map((doctor) => (
                      <motion.div
                        key={doctor.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          appointmentData.doctorId === doctor.id.toString()
                            ? 'border-red-600 bg-red-50/50'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleInputChange('doctorId', doctor.id.toString())}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={doctor.image} alt={doctor.name} />
                              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg">{doctor.name}</h3>
                              <p className="text-muted-foreground">{doctor.specialty}</p>
                              <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">Rating: {doctor.rating}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg text-foreground">{doctor.consultationFee}</p>
                            <p className="text-sm text-muted-foreground">Consultation Fee</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && selectedDoctor && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedDoctor.image} alt={selectedDoctor.name} />
                      <AvatarFallback>{selectedDoctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{selectedDoctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedDoctor.specialty}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendar */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Select Date</Label>
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date)
                          handleInputChange('date', date ? format(date, 'yyyy-MM-dd') : '')
                        }}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border"
                      />
                    </div>

                    {/* Time Slots */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Available Time Slots</Label>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={appointmentData.time === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleInputChange('time', time)}
                              className={appointmentData.time === time ? 'bg-red-600 hover:bg-red-700' : ''}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">Please select a date first</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">Full Name *</Label>
                      <Input
                        id="patientName"
                        placeholder="Enter patient name"
                        value={appointmentData.patientName}
                        onChange={(e) => handleInputChange('patientName', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+92-xxx-xxxxxxx"
                        value={appointmentData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="patient@email.com"
                        value={appointmentData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={appointmentData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={appointmentData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="appointmentType">Appointment Type</Label>
                      <Select value={appointmentData.appointmentType} onValueChange={(value) => handleInputChange('appointmentType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="followup">Follow-up</SelectItem>
                          <SelectItem value="checkup">Check-up</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Symptoms / Reason for Visit</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Please describe your symptoms or reason for the visit"
                      value={appointmentData.symptoms}
                      onChange={(e) => handleInputChange('symptoms', e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Success */}
              {currentStep === 4 && (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Appointment Booked Successfully!</h2>
                  <p className="text-muted-foreground mb-6">
                    Your appointment with {selectedDoctor?.name} has been confirmed.
                  </p>
                  
                  <div className="bg-muted p-6 rounded-lg text-left max-w-md mx-auto mb-6">
                    <h3 className="font-semibold mb-3">Appointment Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Doctor:</strong> {selectedDoctor?.name}</p>
                      <p><strong>Date:</strong> {appointmentData.date}</p>
                      <p><strong>Time:</strong> {appointmentData.time}</p>
                      <p><strong>Patient:</strong> {appointmentData.patientName}</p>
                      <p><strong>Fee:</strong> {selectedDoctor?.consultationFee}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <Button className="bg-red-600 hover:bg-red-700">
                      Download Confirmation
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/hospital/patient-dashboard')}>
                      Go to Dashboard
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={currentStep === 3 ? handleSubmit : handleNext}
                    disabled={
                      (currentStep === 1 && !appointmentData.doctorId) ||
                      (currentStep === 2 && (!appointmentData.date || !appointmentData.time)) ||
                      (currentStep === 3 && (!appointmentData.patientName || !appointmentData.phone))
                    }
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {currentStep === 3 ? 'Book Appointment' : 'Next'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
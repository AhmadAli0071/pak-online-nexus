import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Users, 
  Bed, 
  Heart, 
  Calendar, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Award,
  Stethoscope,
  Building2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navbar from '@/components/Navbar'
import DoctorCard from '@/components/hospital/DoctorCard'

// Mock data for hospital detail
const hospitalDetail = {
  id: 1,
  name: "Shaukat Khanum Memorial Cancer Hospital",
  ownerName: "Dr. Faisal Mahmood",
  ownerDp: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  hospitalImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop",
  specialization: "Oncology, Cancer Treatment",
  city: "Lahore",
  category: "Specialized Hospital",
  rating: 4.9,
  description: "Leading cancer treatment facility with world-class care and cutting-edge research programs. We provide comprehensive cancer treatment services with a multidisciplinary approach.",
  doctorsCount: 85,
  bedsCount: 195,
  emergencyService: true,
  admissionStatus: "Open",
  address: "7-A, Block R-3, Johar Town, Lahore, Punjab, Pakistan",
  phone: "+92-42-35905000",
  email: "info@shaukatkhanum.org.pk",
  website: "www.shaukatkhanum.org.pk",
  establishedYear: 1994,
  visitingHours: "9:00 AM - 5:00 PM",
  services: [
    "Radiation Therapy",
    "Chemotherapy", 
    "Surgical Oncology",
    "Medical Oncology",
    "Hematology",
    "Palliative Care",
    "Diagnostic Imaging",
    "Laboratory Services"
  ],
  certifications: [
    "Joint Commission International (JCI)",
    "ISO 9001:2015",
    "Pakistan Medical & Dental Council"
  ],
  insuranceAccepted: [
    "State Life Insurance",
    "EFU Health Insurance",
    "Jubilee General Insurance",
    "TPL Insurance"
  ]
}

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Medical Oncology",
    image: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=150&h=150&fit=crop&crop=face",
    experience: "15 years",
    qualification: "MBBS, MD, Fellowship in Medical Oncology",
    rating: 4.9,
    availability: "Mon-Fri: 9AM-5PM"
  },
  {
    id: 2,
    name: "Dr. Muhammad Hassan",
    specialty: "Surgical Oncology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    experience: "18 years",
    qualification: "MBBS, MS, Fellowship in Surgical Oncology",
    rating: 4.8,
    availability: "Mon-Thu: 8AM-4PM"
  },
  {
    id: 3,
    name: "Dr. Fatima Khan",
    specialty: "Radiation Oncology",
    image: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=150&h=150&fit=crop&crop=face",
    experience: "12 years", 
    qualification: "MBBS, MD, Fellowship in Radiation Oncology",
    rating: 4.7,
    availability: "Tue-Sat: 10AM-6PM"
  }
]

export default function HospitalDetail() {
  const { hospitalId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/hospital')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Hospitals
        </Button>

        {/* Hospital Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="overflow-hidden shadow-lg">
            <div className="relative h-64">
              <img
                src={hospitalDetail.hospitalImage}
                alt={hospitalDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <Heart className="h-3 w-3 mr-1" />
                    {hospitalDetail.emergencyService ? '24/7 Emergency' : 'Emergency Available'}
                  </Badge>
                  <Badge variant={hospitalDetail.admissionStatus === 'Open' ? 'default' : 'destructive'}>
                    {hospitalDetail.admissionStatus}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">{hospitalDetail.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{hospitalDetail.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{hospitalDetail.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>Est. {hospitalDetail.establishedYear}</span>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Contact Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{hospitalDetail.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{hospitalDetail.email}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <span>{hospitalDetail.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Visiting Hours: {hospitalDetail.visitingHours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-lg mb-2">Hospital Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Users className="h-6 w-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl font-bold">{hospitalDetail.doctorsCount}</div>
                      <div className="text-xs text-muted-foreground">Doctors</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Bed className="h-6 w-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl font-bold">{hospitalDetail.bedsCount}</div>
                      <div className="text-xs text-muted-foreground">Beds</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Stethoscope className="h-6 w-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl font-bold">{hospitalDetail.services.length}</div>
                      <div className="text-xs text-muted-foreground">Services</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl font-bold">{hospitalDetail.certifications.length}</div>
                      <div className="text-xs text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a href={`/hospital/${hospitalId}/book-appointment`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </a>
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Hospital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {hospitalDetail.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Specialization</h4>
                      <p className="text-sm text-muted-foreground">{hospitalDetail.specialization}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Certifications & Accreditations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {hospitalDetail.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Chief Medical Officer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={hospitalDetail.ownerDp} alt={hospitalDetail.ownerName} />
                        <AvatarFallback>{hospitalDetail.ownerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{hospitalDetail.ownerName}</h4>
                        <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{hospitalDetail.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book with CMO
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="doctors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} hospitalId={hospitalId!} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Medical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hospitalDetail.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Stethoscope className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <CardTitle>Insurance & Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Accepted Insurance</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {hospitalDetail.insuranceAccepted.map((insurance, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{insurance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Payment Methods</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Cash</Badge>
                      <Badge variant="outline">Credit Card</Badge>
                      <Badge variant="outline">Bank Transfer</Badge>
                      <Badge variant="outline">Insurance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
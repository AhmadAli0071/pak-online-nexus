import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, MapPin, Users, BookOpen, GraduationCap, Phone, Mail, Check, ArrowLeft, Globe, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Navbar from '@/components/Navbar'

// Mock data - in real app, fetch based on ID
const instituteData = {
  id: 1,
  name: "Lahore University of Management Sciences",
  location: "Lahore, Punjab",
  logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=face",
  banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
  rating: 4.8,
  verified: true,
  students: "8,500+",
  courses: "45+",
  specialization: "Business, Engineering, Computer Science",
  admissionStatus: "Open",
  phone: "+92-42-111-11-1111",
  email: "admissions@lums.edu.pk",
  website: "www.lums.edu.pk",
  established: "1984",
  description: "LUMS is a leading university in Pakistan, known for its academic excellence and innovative programs. We offer world-class education with a focus on research and development.",
  facilities: [
    "Modern Libraries",
    "Research Labs", 
    "Sports Complex",
    "Hostels",
    "Cafeteria",
    "WiFi Campus"
  ],
  reviews: [
    {
      id: 1,
      student: "Ahmed Ali",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent faculty and great learning environment. The campus facilities are top-notch.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      student: "Fatima Khan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6491e79?w=40&h=40&fit=crop&crop=face",
      rating: 4,
      comment: "Great university with good career opportunities. The professors are very supportive.",
      date: "1 month ago"
    }
  ]
}

export default function InstituteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-96"
        >
          <img
            src={instituteData.banner}
            alt={instituteData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          {/* Back Button */}
          <Button
            variant="ghost"
            className="absolute top-4 left-4 text-white hover:bg-white/20"
            onClick={() => navigate('/education')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Institutes
          </Button>

          {/* Institute Info Overlay */}
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={instituteData.logo}
                alt={`${instituteData.name} logo`}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-4xl font-bold">{instituteData.name}</h1>
                  {instituteData.verified && (
                    <div className="bg-primary text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{instituteData.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{instituteData.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>About the Institute</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {instituteData.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{instituteData.students}</p>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{instituteData.courses}</p>
                    <p className="text-sm text-muted-foreground">Courses</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{instituteData.established}</p>
                    <p className="text-sm text-muted-foreground">Established</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{instituteData.rating}</p>
                    <p className="text-sm text-muted-foreground">Rating</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Facilities */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {instituteData.facilities.map((facility, index) => (
                        <Badge key={index} variant="secondary" className="p-2 justify-center">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Student Reviews */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {instituteData.reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-4 last:border-b-0">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.student[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-semibold text-foreground">{review.student}</p>
                              <div className="flex">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Courses
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{instituteData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{instituteData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{instituteData.website}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Admission Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="font-semibold text-green-600">Currently Open</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Applications are being accepted for the upcoming semester.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
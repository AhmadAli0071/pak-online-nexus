import { motion } from 'framer-motion'
import { Star, MapPin, Users, BookOpen, GraduationCap, Phone, Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/Navbar'

const institutes = [
  {
    id: 1,
    name: "Lahore University of Management Sciences",
    location: "Lahore, Punjab",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop",
    rating: 4.8,
    verified: true,
    students: "8,500+",
    courses: "45+",
    specialization: "Business, Engineering, Computer Science",
    admissionStatus: "Open",
    phone: "+92-42-111-11-1111",
    email: "admissions@lums.edu.pk"
  },
  {
    id: 2,
    name: "University of Punjab",
    location: "Lahore, Punjab",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    rating: 4.6,
    verified: true,
    students: "45,000+",
    courses: "120+",
    specialization: "Medicine, Law, Arts, Sciences",
    admissionStatus: "Closed",
    phone: "+92-42-111-22-2222",
    email: "info@pu.edu.pk"
  },
  {
    id: 3,
    name: "Karachi Institute of Technology",
    location: "Karachi, Sindh",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop",
    rating: 4.7,
    verified: true,
    students: "12,000+",
    courses: "65+",
    specialization: "Engineering, IT, Architecture",
    admissionStatus: "Open",
    phone: "+92-21-111-33-3333",
    email: "admissions@kit.edu.pk"
  }
]

export default function Education() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Educational
                <span className="text-primary"> Institutes</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover top educational institutions across Pakistan. Find the perfect institute 
                for your academic journey.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Institutes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {institutes.map((institute, index) => (
              <motion.div
                key={institute.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Banner with Logo Overlay */}
                  <div className="relative h-48 md:h-64">
                    <img
                      src={institute.banner}
                      alt={institute.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Logo Overlay */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <div className="relative">
                        <img
                          src={institute.logo}
                          alt={`${institute.name} logo`}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg"
                        />
                        {institute.verified && (
                          <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full p-1">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Institute Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {institute.name}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{institute.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{institute.rating}</span>
                          </div>
                          {institute.verified && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm">
                          View Courses
                        </Button>
                      </div>
                    </div>

                    {/* Institute Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Users className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Total Students</p>
                          <p className="font-semibold text-foreground">{institute.students}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Available Courses</p>
                          <p className="font-semibold text-foreground">{institute.courses}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Specialization</p>
                          <p className="font-semibold text-foreground text-sm">{institute.specialization}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className={`h-3 w-3 rounded-full ${
                          institute.admissionStatus === 'Open' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <p className="text-sm text-muted-foreground">Admission Status</p>
                          <p className={`font-semibold ${
                            institute.admissionStatus === 'Open' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {institute.admissionStatus}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{institute.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{institute.email}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
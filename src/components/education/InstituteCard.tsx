import { motion } from 'framer-motion'
import { Star, MapPin, Users, BookOpen, GraduationCap, Phone, Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

interface Institute {
  id: number
  name: string
  location: string
  logo: string
  banner: string
  rating: number
  verified: boolean
  students: string
  courses: string
  specialization: string
  admissionStatus: string
  phone: string
  email: string
}

interface InstituteCardProps {
  institute: Institute
  index: number
}

export default function InstituteCard({ institute, index }: InstituteCardProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/education/institute/${institute.id}`)}>
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
              <Button size="sm" className="bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/education/apply/${institute.id}`)
                      }}>
                Apply Now
              </Button>
              <Button variant="outline" size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/education/courses/${institute.id}`)
                      }}>
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
  )
}
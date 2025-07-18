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
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            onClick={() => navigate(`/education/institute/${institute.id}`)}>
        {/* Banner with Logo Overlay */}
        <div className="relative h-48">
          <img
            src={institute.banner}
            alt={institute.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Logo */}
          <div className="absolute top-4 right-4">
            <img
              src={institute.logo}
              alt={`${institute.name} logo`}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
            />
          </div>

          {/* Institute Type Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-white">
              {institute.name.includes('University') ? 'University' : 
               institute.name.includes('College') ? 'College' : 'School'}
            </Badge>
          </div>

          {/* Name and Location Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">{institute.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-3 w-3" />
              <span>{institute.location}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Rating and Verification */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{institute.rating}</span>
              <span className="text-xs text-muted-foreground">(1.2k reviews)</span>
            </div>
            {institute.verified && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Check className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>

          {/* Courses Offered */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Courses Offered (3 shown):</p>
            <div className="flex flex-wrap gap-1">
              {institute.specialization.split(', ').slice(0, 3).map((course, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Students Count */}
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{institute.students}</span>
            <span className="text-xs text-muted-foreground">Total Students</span>
          </div>

          {/* Apply Button */}
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/education/institute/${institute.id}`)
            }}
          >
            Apply Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Star, Calendar, Clock, GraduationCap } from 'lucide-react'

interface Doctor {
  id: number
  name: string
  specialty: string
  image: string
  experience: string
  qualification: string
  rating: number
  availability: string
}

interface DoctorCardProps {
  doctor: Doctor
  hospitalId: string
}

export default function DoctorCard({ doctor, hospitalId }: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={doctor.image} alt={doctor.name} />
              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground">{doctor.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{doctor.specialty}</p>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{doctor.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">rating</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{doctor.qualification}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{doctor.experience} experience</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{doctor.availability}</span>
            </div>
          </div>

          <Badge variant="outline" className="mb-4 w-full justify-center">
            {doctor.specialty}
          </Badge>

          <div className="flex gap-2">
            <Button className="flex-1 bg-red-600 hover:bg-red-700">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
            <Button variant="outline" size="icon">
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
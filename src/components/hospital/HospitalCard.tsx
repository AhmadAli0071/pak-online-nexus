import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  MapPin, 
  Star, 
  Users, 
  Bed, 
  Heart, 
  Calendar,
  Phone,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { Hospital } from '../../pages/Hospital'
import { Link } from 'react-router-dom'

interface HospitalCardProps {
  hospital: Hospital
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden bg-card shadow-card hover:shadow-lg transition-all duration-300 border-0">
        {/* Hospital Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={hospital.hospitalImage} 
            alt={hospital.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant={hospital.admissionStatus === 'Open' ? 'default' : 'destructive'}
              className="bg-background/90 backdrop-blur-sm"
            >
              {hospital.admissionStatus === 'Open' ? (
                <CheckCircle className="h-3 w-3 mr-1" />
              ) : (
                <AlertTriangle className="h-3 w-3 mr-1" />
              )}
              {hospital.admissionStatus}
            </Badge>
          </div>
          {/* Emergency Service Badge */}
          {hospital.emergencyService && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-red-600 hover:bg-red-700 text-white">
                <Heart className="h-3 w-3 mr-1" />
                24/7 Emergency
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          {/* Hospital Info */}
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-foreground leading-tight line-clamp-2">
                  {hospital.name}
                </h3>
                <div className="flex items-center gap-1 ml-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{hospital.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{hospital.city}</span>
              </div>

              <Badge variant="outline" className="mb-3">
                {hospital.category}
              </Badge>
            </div>

            {/* Specialization */}
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Specialization:</p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {hospital.specialization}
              </p>
            </div>

            {/* Hospital Stats */}
            <div className="grid grid-cols-2 gap-4 py-3 border-t border-border">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Doctors</p>
                  <p className="text-sm font-medium">{hospital.doctorsCount}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Beds</p>
                  <p className="text-sm font-medium">{hospital.bedsCount}</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center gap-3 py-3 border-t border-border">
              <Avatar className="h-10 w-10">
                <AvatarImage src={hospital.ownerDp} alt={hospital.ownerName} />
                <AvatarFallback>{hospital.ownerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{hospital.ownerName}</p>
                <p className="text-xs text-muted-foreground">Chief Medical Officer</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {hospital.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button asChild className="flex-1">
                <Link to={`/hospital/${hospital.id}`}>
                  View Details
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link to={`/hospital/${hospital.id}/book-appointment`}>
                  <Calendar className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
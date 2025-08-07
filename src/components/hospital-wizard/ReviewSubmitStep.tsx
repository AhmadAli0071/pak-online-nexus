import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Users, Stethoscope, Phone, Mail, MapPin, Clock } from 'lucide-react'

interface ReviewSubmitStepProps {
  data: any
  onUpdate: (data: any) => void
  onSubmit: () => void
  onPrevious: () => void
}

export default function ReviewSubmitStep({ data, onSubmit, onPrevious }: ReviewSubmitStepProps) {
  const handleSubmit = () => {
    // Final validation could be done here
    onSubmit()
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Review Hospital Information</h2>
        <p className="text-muted-foreground">Please review all information before submitting your registration</p>
      </div>

      {/* Hospital Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Hospital Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Hospital Name:</span>
              <p className="text-muted-foreground">{data.hospitalName || 'Not provided'}</p>
            </div>
            <div>
              <span className="font-medium">Owner/CMO:</span>
              <p className="text-muted-foreground">{data.ownerName || 'Not provided'}</p>
            </div>
            <div>
              <span className="font-medium">Hospital Type:</span>
              <p className="text-muted-foreground">{data.hospitalType || 'Not selected'}</p>
            </div>
            <div>
              <span className="font-medium">City:</span>
              <p className="text-muted-foreground">{data.city || 'Not selected'}</p>
            </div>
            <div>
              <span className="font-medium">Established:</span>
              <p className="text-muted-foreground">{data.establishedYear || 'Not provided'}</p>
            </div>
            <div>
              <span className="font-medium">License Number:</span>
              <p className="text-muted-foreground">{data.licenseNumber || 'Not provided'}</p>
            </div>
          </div>
          
          {data.address && (
            <div className="mt-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Address:</span>
                  <p className="text-muted-foreground">{data.address}</p>
                </div>
              </div>
            </div>
          )}
          
          {data.description && (
            <div className="mt-4">
              <span className="font-medium">Description:</span>
              <p className="text-muted-foreground text-sm">{data.description}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">Phone:</span>
              <span className="text-muted-foreground">{data.phone || 'Not provided'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-medium">Email:</span>
              <span className="text-muted-foreground">{data.email || 'Not provided'}</span>
            </div>
            {data.website && (
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="font-medium">Website:</span>
                <span className="text-muted-foreground">{data.website}</span>
              </div>
            )}
            {data.visitingHours && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">Visiting Hours:</span>
                <span className="text-muted-foreground">{data.visitingHours}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Medical Specialties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5" />
            Medical Specialties & Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.specialties && data.specialties.length > 0 ? (
            <div className="mb-4">
              <span className="font-medium mb-2 block">Specialties:</span>
              <div className="flex flex-wrap gap-2">
                {data.specialties.map((specialty: string) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground mb-4">No specialties selected</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">24/7 Emergency:</span>
              <Badge variant={data.emergencyServices ? 'default' : 'outline'}>
                {data.emergencyServices ? 'Available' : 'Not Available'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Ambulance Service:</span>
              <Badge variant={data.ambulanceService ? 'default' : 'outline'}>
                {data.ambulanceService ? 'Available' : 'Not Available'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Laboratory:</span>
              <Badge variant={data.labServices ? 'default' : 'outline'}>
                {data.labServices ? 'Available' : 'Not Available'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Radiology:</span>
              <Badge variant={data.radiologyServices ? 'default' : 'outline'}>
                {data.radiologyServices ? 'Available' : 'Not Available'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Capacity & Staff */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Capacity & Staff
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-foreground">{data.totalBeds || 0}</div>
              <div className="text-xs text-muted-foreground">Total Beds</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-foreground">{data.totalDoctors || 0}</div>
              <div className="text-xs text-muted-foreground">Doctors</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-foreground">{data.icuBeds || 0}</div>
              <div className="text-xs text-muted-foreground">ICU Beds</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-foreground">{data.operatingRooms || 0}</div>
              <div className="text-xs text-muted-foreground">OR Rooms</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={handleSubmit} className="bg-red-600 hover:bg-red-700">
          Submit Hospital Registration
        </Button>
      </div>
    </div>
  )
}
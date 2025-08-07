import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

interface StaffCapacityStepProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function StaffCapacityStep({ data, onUpdate, onNext, onPrevious }: StaffCapacityStepProps) {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value })
  }

  const handleNext = () => {
    if (!data.totalBeds || !data.totalDoctors) {
      alert('Please fill in at least the total beds and doctors count')
      return
    }
    onNext()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Hospital Capacity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalBeds">Total Beds *</Label>
              <Input
                id="totalBeds"
                type="number"
                placeholder="100"
                min="1"
                value={data.totalBeds}
                onChange={(e) => handleInputChange('totalBeds', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="icuBeds">ICU Beds</Label>
              <Input
                id="icuBeds"
                type="number"
                placeholder="20"
                min="0"
                value={data.icuBeds}
                onChange={(e) => handleInputChange('icuBeds', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyBeds">Emergency Beds</Label>
              <Input
                id="emergencyBeds"
                type="number"
                placeholder="15"
                min="0"
                value={data.emergencyBeds}
                onChange={(e) => handleInputChange('emergencyBeds', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="operatingRooms">Operating Rooms</Label>
              <Input
                id="operatingRooms"
                type="number"
                placeholder="8"
                min="0"
                value={data.operatingRooms}
                onChange={(e) => handleInputChange('operatingRooms', e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Staff Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalDoctors">Total Doctors *</Label>
              <Input
                id="totalDoctors"
                type="number"
                placeholder="50"
                min="1"
                value={data.totalDoctors}
                onChange={(e) => handleInputChange('totalDoctors', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nursingStaff">Nursing Staff</Label>
              <Input
                id="nursingStaff"
                type="number"
                placeholder="120"
                min="0"
                value={data.nursingStaff}
                onChange={(e) => handleInputChange('nursingStaff', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supportStaff">Support Staff</Label>
              <Input
                id="supportStaff"
                type="number"
                placeholder="80"
                min="0"
                value={data.supportStaff}
                onChange={(e) => handleInputChange('supportStaff', e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Additional Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="visitingHours">Visiting Hours</Label>
              <Input
                id="visitingHours"
                placeholder="9:00 AM - 8:00 PM"
                value={data.visitingHours}
                onChange={(e) => handleInputChange('visitingHours', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPerson">Emergency Contact Person</Label>
              <Input
                id="contactPerson"
                placeholder="Dr. John Smith"
                value={data.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-foreground mb-2">Summary</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Total Capacity: {data.totalBeds || 0} beds</p>
              <p>Medical Staff: {data.totalDoctors || 0} doctors, {data.nursingStaff || 0} nurses</p>
              <p>Special Units: {data.icuBeds || 0} ICU beds, {data.emergencyBeds || 0} emergency beds</p>
              <p>Surgical Facilities: {data.operatingRooms || 0} operating rooms</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={handleNext} className="bg-red-600 hover:bg-red-700">
          Continue to Review
        </Button>
      </div>
    </div>
  )
}
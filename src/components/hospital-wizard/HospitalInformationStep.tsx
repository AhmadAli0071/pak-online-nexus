import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

interface HospitalInformationStepProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
}

export default function HospitalInformationStep({ data, onUpdate, onNext }: HospitalInformationStepProps) {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value })
  }

  const handleNext = () => {
    // Basic validation
    if (!data.hospitalName || !data.ownerName || !data.email || !data.phone || !data.city) {
      alert('Please fill in all required fields')
      return
    }
    onNext()
  }

  const hospitalTypes = [
    'General Hospital',
    'Specialized Hospital',
    'Teaching Hospital',
    'Children\'s Hospital',
    'Maternity Hospital',
    'Psychiatric Hospital',
    'Rehabilitation Hospital',
    'Military Hospital'
  ]

  const cities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad',
    'Multan', 'Peshawar', 'Quetta', 'Gujranwala', 'Sialkot'
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="hospitalName">Hospital Name *</Label>
              <Input
                id="hospitalName"
                placeholder="Enter hospital name"
                value={data.hospitalName}
                onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ownerName">Chief Medical Officer / Owner *</Label>
              <Input
                id="ownerName"
                placeholder="Dr. John Smith"
                value={data.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@hospital.com"
                value={data.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+92-xxx-xxxxxxx"
                value={data.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Select value={data.city} onValueChange={(value) => handleInputChange('city', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hospitalType">Hospital Type</Label>
              <Select value={data.hospitalType} onValueChange={(value) => handleInputChange('hospitalType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hospital type" />
                </SelectTrigger>
                <SelectContent>
                  {hospitalTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Medical License Number</Label>
              <Input
                id="licenseNumber"
                placeholder="Enter license number"
                value={data.licenseNumber}
                onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="establishedYear">Year Established</Label>
              <Input
                id="establishedYear"
                type="number"
                placeholder="2020"
                min="1900"
                max="2024"
                value={data.establishedYear}
                onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://www.hospital.com"
                value={data.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="address">Hospital Address</Label>
            <Textarea
              id="address"
              placeholder="Enter complete hospital address"
              value={data.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Hospital Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of your hospital, services, and mission"
              value={data.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="bg-red-600 hover:bg-red-700">
          Continue to Medical Specialties
        </Button>
      </div>
    </div>
  )
}
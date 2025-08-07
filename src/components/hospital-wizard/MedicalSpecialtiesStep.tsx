import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

interface MedicalSpecialtiesStepProps {
  data: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrevious: () => void
}

export default function MedicalSpecialtiesStep({ data, onUpdate, onNext, onPrevious }: MedicalSpecialtiesStepProps) {
  const medicalSpecialties = [
    'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Gynecology',
    'Dermatology', 'Psychiatry', 'Oncology', 'Urology', 'Ophthalmology',
    'ENT', 'General Surgery', 'Plastic Surgery', 'Anesthesiology', 'Radiology',
    'Pathology', 'Emergency Medicine', 'Internal Medicine', 'Pulmonology', 'Nephrology'
  ]

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    const currentSpecialties = data.specialties || []
    if (checked) {
      onUpdate({ specialties: [...currentSpecialties, specialty] })
    } else {
      onUpdate({ specialties: currentSpecialties.filter((s: string) => s !== specialty) })
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    onUpdate({ [service]: checked })
  }

  const handleNext = () => {
    if (!data.specialties || data.specialties.length === 0) {
      alert('Please select at least one medical specialty')
      return
    }
    onNext()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Medical Specialties</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select all medical specialties available at your hospital
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {medicalSpecialties.map((specialty) => (
              <div key={specialty} className="flex items-center space-x-2">
                <Checkbox
                  id={specialty}
                  checked={data.specialties?.includes(specialty) || false}
                  onCheckedChange={(checked) => handleSpecialtyChange(specialty, checked as boolean)}
                />
                <Label
                  htmlFor={specialty}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {specialty}
                </Label>
              </div>
            ))}
          </div>

          {data.specialties && data.specialties.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Selected Specialties:</p>
              <div className="flex flex-wrap gap-2">
                {data.specialties.map((specialty: string) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Additional Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="emergencyServices"
                checked={data.emergencyServices || false}
                onCheckedChange={(checked) => handleServiceChange('emergencyServices', checked as boolean)}
              />
              <Label htmlFor="emergencyServices">24/7 Emergency Services</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="ambulanceService"
                checked={data.ambulanceService || false}
                onCheckedChange={(checked) => handleServiceChange('ambulanceService', checked as boolean)}
              />
              <Label htmlFor="ambulanceService">Ambulance Service</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="labServices"
                checked={data.labServices || false}
                onCheckedChange={(checked) => handleServiceChange('labServices', checked as boolean)}
              />
              <Label htmlFor="labServices">Laboratory Services</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="radiologyServices"
                checked={data.radiologyServices || false}
                onCheckedChange={(checked) => handleServiceChange('radiologyServices', checked as boolean)}
              />
              <Label htmlFor="radiologyServices">Radiology & Imaging</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="pharmacyServices"
                checked={data.pharmacyServices || false}
                onCheckedChange={(checked) => handleServiceChange('pharmacyServices', checked as boolean)}
              />
              <Label htmlFor="pharmacyServices">In-house Pharmacy</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={handleNext} className="bg-red-600 hover:bg-red-700">
          Continue to Staff & Capacity
        </Button>
      </div>
    </div>
  )
}
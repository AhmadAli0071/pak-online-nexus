import { useState } from 'react'
import { Search, Filter, MapPin, Building, Stethoscope } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

interface HospitalFiltersProps {
  onFilter: (filters: {
    city: string
    category: string
    specialization: string
    search: string
  }) => void
}

export default function HospitalFilters({ onFilter }: HospitalFiltersProps) {
  const [filters, setFilters] = useState({
    city: '',
    category: '',
    specialization: '',
    search: ''
  })

  const cities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Quetta', 'Gujranwala', 'Sialkot'
  ]

  const categories = [
    'General Hospital',
    'Specialized Hospital', 
    'Government Hospital',
    'Private Hospital',
    'Military Hospital',
    'Teaching Hospital'
  ]

  const specializations = [
    'Cardiology',
    'Oncology', 
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Gynecology',
    'Emergency Medicine',
    'General Surgery',
    'Psychiatry',
    'Dermatology'
  ]

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilter(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = { city: '', category: '', specialization: '', search: '' }
    setFilters(clearedFilters)
    onFilter(clearedFilters)
  }

  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              {/* Search */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search Hospitals
                </label>
                <div className="relative">
                  <Input
                    placeholder="Hospital name, doctor..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* City Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  City
                </label>
                <Select value={filters.city} onValueChange={(value) => handleFilterChange('city', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Cities</SelectItem>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Hospital Type
                </label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Specialization Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Specialization
                </label>
                <Select value={filters.specialization} onValueChange={(value) => handleFilterChange('specialization', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Specialties</SelectItem>
                    {specializations.map(spec => (
                      <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" onClick={clearFilters} size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
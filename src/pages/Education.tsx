import { motion } from 'framer-motion'
import { GraduationCap, Plus, MapPin, Star, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import InstituteCard from '@/components/education/InstituteCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const cities = ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan']
  const instituteTypes = ['University', 'College', 'School', 'Academy']

  const filteredInstitutes = institutes.filter(institute => {
    const matchesSearch = institute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institute.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = selectedCity === 'all' || institute.location.includes(selectedCity)
    const matchesType = selectedType === 'all' || institute.name.toLowerCase().includes(selectedType.toLowerCase())
    
    return matchesSearch && matchesCity && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative pt-20 pb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=80&h=80&fit=crop&crop=face" 
                  alt="Pakistan Online Logo"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-lg mr-4"
                />
                <div className="text-left">
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                    Pakistan <span className="text-primary">Online</span>
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Pakistan</span>
                    <div className="flex items-center gap-1 ml-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore top institutes across Pakistan. Building trust through education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/education/create')}
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create Institute
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/education/dashboard')}
                  size="lg"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Student Dashboard
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search institutes, courses, or specializations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Institute Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {instituteTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Institutes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredInstitutes.map((institute, index) => (
                <InstituteCard key={institute.id} institute={institute} index={index} />
              ))}
            </div>
            {filteredInstitutes.length === 0 && (
              <div className="text-center py-16">
                <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No institutes found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
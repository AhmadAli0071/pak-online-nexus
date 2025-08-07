import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HospitalFilters from '@/components/hospital/HospitalFilters'
import HospitalGrid from '@/components/hospital/HospitalGrid'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Plus, Heart } from 'lucide-react'
import heroHospitalImage from '@/assets/hero-hospital.jpg'

export interface Hospital {
  id: number
  name: string
  ownerName: string
  ownerDp: string
  hospitalImage: string
  specialization: string
  city: string
  category: string
  rating: number
  description: string
  doctorsCount: number
  bedsCount: number
  emergencyService: boolean
  admissionStatus: string
}

// Mock hospital data
const mockHospitals: Hospital[] = [
  {
    id: 1,
    name: "Shaukat Khanum Memorial Cancer Hospital",
    ownerName: "Dr. Faisal Mahmood",
    ownerDp: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop",
    specialization: "Oncology, Cancer Treatment",
    city: "Lahore",
    category: "Specialized Hospital",
    rating: 4.9,
    description: "Leading cancer treatment facility with world-class care",
    doctorsCount: 85,
    bedsCount: 195,
    emergencyService: true,
    admissionStatus: "Open"
  },
  {
    id: 2,
    name: "Aga Khan University Hospital",
    ownerName: "Dr. Sarah Ahmed",
    ownerDp: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop",
    specialization: "Multi-specialty, Research Hospital",
    city: "Karachi",
    category: "General Hospital",
    rating: 4.8,
    description: "Premier healthcare institution with cutting-edge medical technology",
    doctorsCount: 120,
    bedsCount: 563,
    emergencyService: true,
    admissionStatus: "Open"
  },
  {
    id: 3,
    name: "Lahore General Hospital",
    ownerName: "Dr. Muhammad Hassan",
    ownerDp: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=400&h=250&fit=crop",
    specialization: "Emergency Medicine, General Surgery",
    city: "Lahore",
    category: "Government Hospital",
    rating: 4.2,
    description: "Serving the community with quality healthcare since 1912",
    doctorsCount: 95,
    bedsCount: 750,
    emergencyService: true,
    admissionStatus: "Open"
  },
  {
    id: 4,
    name: "National Institute of Cardiovascular Diseases",
    ownerName: "Dr. Javaid Iqbal",
    ownerDp: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    specialization: "Cardiology, Heart Surgery",
    city: "Karachi",
    category: "Specialized Hospital",
    rating: 4.7,
    description: "Leading cardiac care center with advanced interventional facilities",
    doctorsCount: 45,
    bedsCount: 200,
    emergencyService: true,
    admissionStatus: "Open"
  },
  {
    id: 5,
    name: "Combined Military Hospital",
    ownerName: "Brigadier Dr. Tariq Khan",
    ownerDp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop",
    specialization: "Multi-specialty, Military Healthcare",
    city: "Rawalpindi",
    category: "Military Hospital",
    rating: 4.5,
    description: "Comprehensive medical care for armed forces and civilians",
    doctorsCount: 75,
    bedsCount: 450,
    emergencyService: true,
    admissionStatus: "Restricted"
  },
  {
    id: 6,
    name: "Children's Hospital Lahore",
    ownerName: "Dr. Amna Malik",
    ownerDp: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    hospitalImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    specialization: "Pediatrics, Child Healthcare",
    city: "Lahore",
    category: "Specialized Hospital",
    rating: 4.6,
    description: "Dedicated pediatric care with child-friendly environment",
    doctorsCount: 55,
    bedsCount: 300,
    emergencyService: true,
    admissionStatus: "Open"
  }
]

export default function Hospital() {
  const [hospitals, setHospitals] = useState<Hospital[]>(mockHospitals)
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(mockHospitals)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleFilter = (filters: {
    city: string
    category: string
    specialization: string
    search: string
  }) => {
    let filtered = hospitals

    if (filters.city) {
      filtered = filtered.filter(hospital => 
        hospital.city.toLowerCase().includes(filters.city.toLowerCase())
      )
    }

    if (filters.category) {
      filtered = filtered.filter(hospital => 
        hospital.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    if (filters.specialization) {
      filtered = filtered.filter(hospital => 
        hospital.specialization.toLowerCase().includes(filters.specialization.toLowerCase())
      )
    }

    if (filters.search) {
      filtered = filtered.filter(hospital => 
        hospital.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        hospital.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        hospital.ownerName.toLowerCase().includes(filters.search.toLowerCase()) ||
        hospital.specialization.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    setFilteredHospitals(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img 
              src={heroHospitalImage} 
              alt="Pakistan Online Hospital System" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-red-600 to-foreground bg-clip-text text-transparent mb-6 leading-tight"
            >
              Virtual Hospital System
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with leading hospitals and healthcare providers across Pakistan. Book appointments, manage your health records, and access quality medical care.
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg shadow-red-600/25 text-lg font-semibold px-8 py-4 h-14">
                  <Link to="/hospital/create">
                    <Plus className="h-5 w-5 mr-2" />
                    Register Hospital
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="rounded-full border-2 border-red-600/20 hover:border-red-600/40 backdrop-blur-sm text-lg font-semibold px-8 py-4 h-14">
                  <Heart className="h-5 w-5 mr-2" />
                  Patient Portal
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <HospitalFilters onFilter={handleFilter} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 animate-pulse">
                <div className="h-40 bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <HospitalGrid hospitals={filteredHospitals} />
        )}
      </main>
    </div>
  )
}
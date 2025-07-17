import { motion } from 'framer-motion'
import { GraduationCap, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import InstituteCard from '@/components/education/InstituteCard'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Educational
                <span className="text-primary"> Institutes</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover top educational institutions across Pakistan. Find the perfect institute 
                for your academic journey.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/education/create')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Institute
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/education/dashboard')}
                >
                  Student Dashboard
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Institutes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {institutes.map((institute, index) => (
              <InstituteCard key={institute.id} institute={institute} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
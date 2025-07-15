import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import StoreFilters from '@/components/store/StoreFilters'
import ShopGrid from '@/components/store/ShopGrid'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

// Mock shop data
const mockShops: Shop[] = [
  {
    id: 1,
    name: "Zara Fashion Hub",
    ownerName: "Ahmed Khan",
    ownerDp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
    businessType: "Product Seller" as const,
    city: "Karachi",
    category: "Garments",
    rating: 4.8,
    description: "Premium clothing and fashion accessories"
  },
  {
    id: 2,
    name: "Tech World Electronics",
    ownerName: "Ali Hassan",
    ownerDp: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=250&fit=crop",
    businessType: "Product Seller" as const,
    city: "Lahore",
    category: "Electronics",
    rating: 4.5,
    description: "Latest electronics and gadgets"
  },
  {
    id: 3,
    name: "Master Plumbing Services",
    ownerName: "Muhammad Usman",
    ownerDp: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
    businessType: "Service Provider" as const,
    city: "Islamabad",
    category: "Plumbing",
    rating: 4.9,
    description: "Professional plumbing and repair services"
  },
  {
    id: 4,
    name: "Taste of Punjab",
    ownerName: "Fatima Sheikh",
    ownerDp: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
    businessType: "Product Seller" as const,
    city: "Faisalabad",
    category: "Food",
    rating: 4.7,
    description: "Authentic Punjabi cuisine and delicacies"
  },
  {
    id: 5,
    name: "Wood Craft Carpentry",
    ownerName: "Rashid Ahmad",
    ownerDp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
    businessType: "Service Provider" as const,
    city: "Peshawar",
    category: "Carpentry",
    rating: 4.6,
    description: "Custom furniture and woodworking services"
  },
  {
    id: 6,
    name: "Mobile Zone",
    ownerName: "Saad Ali",
    ownerDp: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    businessType: "Product Seller" as const,
    city: "Rawalpindi",
    category: "Electronics",
    rating: 4.4,
    description: "Mobile phones and accessories"
  }
]

export interface Shop {
  id: number
  name: string
  ownerName: string
  ownerDp: string
  shopImage: string
  businessType: 'Product Seller' | 'Service Provider'
  city: string
  category: string
  rating: number
  description: string
}

export default function Store() {
  const [shops, setShops] = useState<Shop[]>(mockShops)
  const [filteredShops, setFilteredShops] = useState<Shop[]>(mockShops)
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
    search: string
  }) => {
    let filtered = shops

    if (filters.city) {
      filtered = filtered.filter(shop => 
        shop.city.toLowerCase().includes(filters.city.toLowerCase())
      )
    }

    if (filters.category) {
      filtered = filtered.filter(shop => 
        shop.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    if (filters.search) {
      filtered = filtered.filter(shop => 
        shop.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        shop.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        shop.ownerName.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    setFilteredShops(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-blue-500/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Discover Local Shops & Services
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Connect with local businesses across Pakistan. Shop products or find services near you.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/create-shop">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Your Shop
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <StoreFilters onFilter={handleFilter} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 animate-pulse">
                <div className="h-40 bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <ShopGrid shops={filteredShops} />
        )}
      </main>
    </div>
  )
}
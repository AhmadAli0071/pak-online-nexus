import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Badge, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge as UIBadge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// Mock shop data (in a real app, this would come from an API)
const mockShopData = {
  1: {
    id: 1,
    name: "Zara Fashion Hub",
    ownerName: "Ahmed Khan",
    ownerDp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    shopImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
    businessType: "Product Seller",
    city: "Karachi",
    categories: ["Garments", "Fashion"],
    rating: 4.8,
    totalReviews: 124,
    description: "Premium clothing and fashion accessories for men and women. We offer the latest trends in Pakistani and international fashion.",
    phone: "+92 300 1234567",
    email: "ahmed@zarafashion.pk",
    socialLinks: {
      facebook: "https://facebook.com/zarafashion",
      instagram: "https://instagram.com/zarafashion",
      whatsapp: "+923001234567"
    },
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop"
    ]
  }
}

export default function Shop() {
  const { shopId } = useParams()
  const [shop, setShop] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      if (shopId && mockShopData[parseInt(shopId) as keyof typeof mockShopData]) {
        setShop(mockShopData[parseInt(shopId) as keyof typeof mockShopData])
      } else {
        // Create placeholder data for any shop ID
        setShop({
          id: parseInt(shopId || '1'),
          name: "Sample Shop",
          ownerName: "Shop Owner",
          ownerDp: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          shopImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
          businessType: "Product Seller",
          city: "Karachi",
          categories: ["General"],
          rating: 4.5,
          totalReviews: 50,
          description: "Welcome to our shop! We provide quality products and services.",
          phone: "+92 300 1234567",
          email: "shop@example.com",
          socialLinks: {
            facebook: "",
            instagram: "",
            whatsapp: "+923001234567"
          },
          gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop"
          ]
        })
      }
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [shopId])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-64 bg-muted rounded-2xl mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                  <div className="h-32 bg-muted rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-64 bg-muted rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!shop) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Shop Not Found</h1>
            <p className="text-muted-foreground mb-8">The shop you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/store">Back to Store</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Button variant="ghost" asChild>
              <Link to="/store">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Store
              </Link>
            </Button>
          </motion.div>

          {/* Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 rounded-2xl overflow-hidden mb-8"
          >
            <img
              src={shop.shopImage}
              alt={shop.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{shop.name}</h1>
                <div className="flex items-center gap-4">
                  <UIBadge variant={shop.businessType === 'Product Seller' ? 'default' : 'secondary'}>
                    {shop.businessType}
                  </UIBadge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{shop.rating}</span>
                    <span className="text-white/80 ml-1">({shop.totalReviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Shop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {shop.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {shop.categories.map((category: string) => (
                      <UIBadge key={category} variant="outline">
                        {category}
                      </UIBadge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {shop.gallery.map((image: string, index: number) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded-lg overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Shop Owner */}
              <Card>
                <CardHeader>
                  <CardTitle>Shop Owner</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={shop.ownerDp} alt={shop.ownerName} />
                      <AvatarFallback>{shop.ownerName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{shop.ownerName}</h3>
                      <p className="text-sm text-muted-foreground">Business Owner</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{shop.city}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{shop.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{shop.email}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Connect on Social Media</h4>
                    <div className="flex space-x-2">
                      {shop.socialLinks.facebook && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={shop.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {shop.socialLinks.instagram && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={shop.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {shop.socialLinks.whatsapp && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={`https://wa.me/${shop.socialLinks.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Contact Shop
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share Shop
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
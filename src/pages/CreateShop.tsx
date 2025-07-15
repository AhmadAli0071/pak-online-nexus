import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Upload, Check, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Link } from 'react-router-dom'

const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
  "Peshawar", "Quetta", "Multan", "Gujranwala", "Sialkot",
  "Hyderabad", "Bahawalpur", "Sargodha", "Sukkur", "Larkana"
]

const categories = [
  "Garments", "Electronics", "Food", "Plumbing", "Carpentry", 
  "Services", "Beauty", "Health", "Education", "Automotive"
]

interface FormData {
  shopName: string
  city: string
  selectedCategories: string[]
  businessType: 'Product Seller' | 'Service Provider' | ''
  description: string
  logoFile: File | null
  socialLinks: {
    facebook: string
    instagram: string
    whatsapp: string
  }
  acceptTerms: boolean
}

export default function CreateShop() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    shopName: '',
    city: '',
    selectedCategories: [],
    businessType: '',
    description: '',
    logoFile: null,
    socialLinks: {
      facebook: '',
      instagram: '',
      whatsapp: ''
    },
    acceptTerms: false
  })

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        selectedCategories: [...prev.selectedCategories, category]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        selectedCategories: prev.selectedCategories.filter(c => c !== category)
      }))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, logoFile: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.shopName || !formData.city || !formData.businessType || !formData.acceptTerms) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields and accept terms.",
        variant: "destructive"
      })
      return
    }

    if (formData.selectedCategories.length === 0) {
      toast({
        title: "Select at least one category",
        description: "Please select at least one business category.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate a random shop ID for demonstration
    const newShopId = Math.floor(Math.random() * 1000) + 100

    toast({
      title: "Shop created successfully!",
      description: "Your shop has been created and is now live.",
    })

    setIsSubmitting(false)
    
    // Navigate to the new shop page
    navigate(`/shop/${newShopId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/store">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Store
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Create Your Shop
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Pakistan Online marketplace and reach customers across the country.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Shop Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Shop Name */}
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Shop Name *</Label>
                    <Input
                      id="shopName"
                      type="text"
                      placeholder="Enter your shop name"
                      value={formData.shopName}
                      onChange={(e) => setFormData(prev => ({ ...prev, shopName: e.target.value }))}
                      required
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <Label>City *</Label>
                    <Select value={formData.city} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, city: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Categories */}
                  <div className="space-y-2">
                    <Label>Business Categories *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 border border-border rounded-lg">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={formData.selectedCategories.includes(category)}
                            onCheckedChange={(checked) => 
                              handleCategoryChange(category, checked as boolean)
                            }
                          />
                          <Label htmlFor={category} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <Label>Business Type *</Label>
                    <RadioGroup
                      value={formData.businessType}
                      onValueChange={(value) => 
                        setFormData(prev => ({ ...prev, businessType: value as 'Product Seller' | 'Service Provider' }))
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Product Seller" id="product" />
                        <Label htmlFor="product">Product Seller</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Service Provider" id="service" />
                        <Label htmlFor="service">Service Provider</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your business..."
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  {/* Logo Upload */}
                  <div className="space-y-2">
                    <Label>Shop Logo</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <Label htmlFor="logo-upload" className="cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {formData.logoFile ? formData.logoFile.name : 'Click to upload shop logo'}
                        </p>
                      </Label>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="space-y-4">
                    <Label>Social Media Links (Optional)</Label>
                    <div className="grid gap-4">
                      <Input
                        placeholder="Facebook profile URL"
                        value={formData.socialLinks.facebook}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, facebook: e.target.value }
                        }))}
                      />
                      <Input
                        placeholder="Instagram profile URL"
                        value={formData.socialLinks.instagram}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, instagram: e.target.value }
                        }))}
                      />
                      <Input
                        placeholder="WhatsApp number"
                        value={formData.socialLinks.whatsapp}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          socialLinks: { ...prev.socialLinks, whatsapp: e.target.value }
                        }))}
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I accept the Terms of Service and Privacy Policy *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating Shop...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          Create Shop
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
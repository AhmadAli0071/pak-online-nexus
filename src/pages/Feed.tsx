import { motion } from 'framer-motion'
import { Users, TrendingUp, Camera, Video, Newspaper, Search, Home, Plus, User, Bell, MessageSquare, Filter, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/feed/PostCard'
import CreatePost from '@/components/feed/CreatePost'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const posts = [
  {
    id: 1,
    user: {
      name: "Ahmad Hassan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      verified: true,
      city: "Lahore"
    },
    timestamp: "2 hours ago",
    location: "DHA Phase 5, Lahore",
    content: "Just launched my new online store on Pakistan Online! 🎉 Excited to serve customers across the country. Check out our amazing collection of handmade crafts. #SmallBusiness #Lahore",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    likes: 23,
    comments: 8,
    shares: 3,
    reactions: { heart: 15, laugh: 5, wow: 3 },
    type: "post" as const
  },
  {
    id: 2,
    user: {
      name: "Sarah Khan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6491e79?w=40&h=40&fit=crop&crop=face",
      verified: false,
      city: "Karachi"
    },
    timestamp: "4 hours ago",
    location: "Gulshan-e-Iqbal, Karachi",
    content: "Looking for the best universities in Lahore for Computer Science. Any recommendations? Planning to move there next year! #Education #Pakistan #ComputerScience",
    likes: 45,
    comments: 12,
    shares: 5,
    reactions: { heart: 30, laugh: 2, wow: 13 },
    type: "text" as const
  },
  {
    id: 3,
    user: {
      name: "Pakistan News",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: true,
      city: "Islamabad"
    },
    timestamp: "6 hours ago",
    location: "Blue Area, Islamabad",
    content: "Breaking: New tech startup hubs opening in major cities across Pakistan. This will boost the digital economy significantly. #TechNews #Startup #Pakistan",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    likes: 156,
    comments: 34,
    shares: 28,
    reactions: { heart: 89, laugh: 12, wow: 55 },
    type: "news" as const
  },
  {
    id: 4,
    user: {
      name: "Ali Ahmed",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: false,
      city: "Faisalabad"
    },
    timestamp: "1 day ago",
    location: "Clock Tower, Faisalabad",
    content: "Beautiful sunset at the local park today! Sometimes you need to appreciate the simple things in life. #Sunset #Faisalabad #Nature",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
    likes: 67,
    comments: 15,
    shares: 8,
    reactions: { heart: 45, laugh: 3, wow: 19 },
    type: "post" as const
  }
]

const cities = ['All Cities', 'Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan', 'Peshawar', 'Quetta']

const sidebarMenuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Explore' },
  { icon: Users, label: 'Friends' },
  { icon: Bell, label: 'Notifications', badge: 3 },
  { icon: MessageSquare, label: 'Messages', badge: 2 },
  { icon: User, label: 'Profile' }
]

const trendingTopics = [
  "#PakistanOnline",
  "#SmallBusiness",
  "#Education",
  "#TechStartups",
  "#Karachi",
  "#Lahore"
]

const suggestedUsers = [
  {
    name: "Tech Pakistan",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
    followers: "12.5K"
  },
  {
    name: "Business Hub",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
    followers: "8.2K"
  },
  {
    name: "Education PK",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
    followers: "15.1K"
  }
]

export default function Feed() {
  const navigate = useNavigate()
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAllCities, setShowAllCities] = useState(false)

  const filteredPosts = posts.filter(post => {
    const matchesCity = selectedCity === 'All Cities' || showAllCities || post.user.city === selectedCity
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCity && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Navigation Menu */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-4">Menu</h3>
                  <div className="space-y-2">
                    {sidebarMenuItems.map((item, index) => (
                      <Button
                        key={index}
                        variant={item.active ? "default" : "ghost"}
                        className="w-full justify-start gap-3 relative"
                        onClick={() => {
                          if (item.label === 'My Profile') navigate('/feed/profile/me')
                          if (item.label === 'Create Post') navigate('/feed/create')
                        }}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                        {item.badge && (
                          <Badge className="ml-auto bg-primary text-white text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* City Filter */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    City Filter
                  </h3>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex items-center space-x-2 mt-3">
                    <Checkbox 
                      id="all-cities" 
                      checked={showAllCities}
                      onCheckedChange={(checked) => setShowAllCities(checked === true)}
                    />
                    <label htmlFor="all-cities" className="text-sm text-muted-foreground">
                      Show posts from all cities
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Hashtags */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Trending
                  </h3>
                  <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="w-full justify-start cursor-pointer hover:bg-primary/10"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Users */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Suggested Users
                  </h3>
                  <div className="space-y-3">
                    {suggestedUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-foreground">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.followers} followers</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Follow</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Feed */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              {/* Feed Header with Search */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Pakistan Community Feed</h1>
                    <p className="text-muted-foreground">
                      {selectedCity !== 'All Cities' && !showAllCities 
                        ? `Posts from ${selectedCity}` 
                        : 'Posts from all cities across Pakistan'}
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate('/feed/create')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Button>
                </div>

                {/* Search Bar */}
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search posts by city, hashtag, or content..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Create Post Quick Access */}
              <CreatePost />

              {/* Posts Feed */}
              <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search or city filter to see more posts.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
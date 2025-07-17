import { motion } from 'framer-motion'
import { Users, TrendingUp, Camera, Video, Newspaper, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/feed/PostCard'
import CreatePost from '@/components/feed/CreatePost'

const posts = [
  {
    id: 1,
    user: {
      name: "Ahmad Hassan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      verified: true
    },
    timestamp: "2 hours ago",
    content: "Just launched my new online store on Pakistan Online! 🎉 Excited to serve customers across the country. Check out our amazing collection of handmade crafts.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    likes: 23,
    comments: 8,
    shares: 3,
    type: "post"
  },
  {
    id: 2,
    user: {
      name: "Sarah Khan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6491e79?w=40&h=40&fit=crop&crop=face",
      verified: false
    },
    timestamp: "4 hours ago",
    content: "Looking for the best universities in Lahore for Computer Science. Any recommendations? #Education #Pakistan",
    likes: 45,
    comments: 12,
    shares: 5,
    type: "text"
  },
  {
    id: 3,
    user: {
      name: "Pakistan News",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: true
    },
    timestamp: "6 hours ago",
    content: "Breaking: New tech startup hubs opening in major cities across Pakistan. This will boost the digital economy significantly.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    likes: 156,
    comments: 34,
    shares: 28,
    type: "news"
  }
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Search */}
              <Card>
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search posts, people..."
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Filters */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">Quick Filters</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Camera className="h-4 w-4" />
                      Photos
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Video className="h-4 w-4" />
                      Videos
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Newspaper className="h-4 w-4" />
                      News
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trending */}
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
              {/* Feed Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Pakistan Feed</h1>
                <p className="text-muted-foreground">Stay connected with the community</p>
              </div>

              {/* Create Post */}
              <CreatePost />

              {/* Posts */}
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
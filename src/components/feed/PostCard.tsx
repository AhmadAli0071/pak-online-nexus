import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share, MoreHorizontal, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'

interface User {
  name: string
  avatar: string
  verified: boolean
}

interface Post {
  id: number
  user: User
  timestamp: string
  content: string
  image?: string
  video?: string
  likes: number
  comments: number
  shares: number
  type: 'post' | 'text' | 'news' | 'video'
}

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/feed/post/${post.id}`)}>
        <CardContent className="p-6">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="cursor-pointer" onClick={(e) => {
                e.stopPropagation()
                navigate(`/feed/profile/${post.user.name.toLowerCase().replace(' ', '')}`)
              }}>
                <AvatarImage src={post.user.avatar} />
                <AvatarFallback>{post.user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-foreground">{post.user.name}</p>
                  {post.user.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                  {post.type === 'news' && (
                    <Badge variant="secondary" className="text-xs">
                      News
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{post.timestamp}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-foreground leading-relaxed">{post.content}</p>
            
            {/* Media Content */}
            {post.image && (
              <div className="mt-3 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post image"
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}
            
            {post.video && (
              <div className="mt-3 rounded-lg overflow-hidden relative">
                <video
                  src={post.video}
                  className="w-full max-h-96 object-cover"
                  poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-muted-foreground hover:text-red-500"
                onClick={(e) => e.stopPropagation()}
              >
                <Heart className="h-4 w-4" />
                {post.likes}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-muted-foreground hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <MessageCircle className="h-4 w-4" />
                {post.comments}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-muted-foreground hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <Share className="h-4 w-4" />
                {post.shares}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
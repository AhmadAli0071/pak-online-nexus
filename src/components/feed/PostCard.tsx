import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share, MoreHorizontal, Play, MapPin, Laugh, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface User {
  name: string
  avatar: string
  verified: boolean
  city: string
}

interface Post {
  id: number
  user: User
  timestamp: string
  location: string
  content: string
  image?: string
  video?: string
  likes: number
  comments: number
  shares: number
  reactions: {
    heart: number
    laugh: number
    wow: number
  }
  type: 'post' | 'text' | 'news' | 'video'
}

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)

  const handleReaction = (reaction: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedReaction(selectedReaction === reaction ? null : reaction)
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/feed/post/${post.id}`)}>
        <CardContent className="p-6">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="cursor-pointer ring-2 ring-primary/20" onClick={(e) => {
                e.stopPropagation()
                navigate(`/feed/profile/${post.user.name.toLowerCase().replace(' ', '')}`)
              }}>
                <AvatarImage src={post.user.avatar} />
                <AvatarFallback>{post.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-foreground">{post.user.name}</p>
                  {post.user.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                  {post.type === 'news' && (
                    <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">
                      Breaking News
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.timestamp}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{post.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-foreground leading-relaxed whitespace-pre-line">{post.content}</p>
            
            {/* Media Content */}
            {post.image && (
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full max-h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            {post.video && (
              <div className="mt-4 rounded-xl overflow-hidden relative">
                <video
                  src={post.video}
                  className="w-full max-h-96 object-cover"
                  poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/20 rounded-full">
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Reactions Bar */}
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-red-500">❤️</span>
                <span className="text-yellow-500">😂</span>
                <span className="text-blue-500">😮</span>
                <span>{post.reactions.heart + post.reactions.laugh + post.reactions.wow}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-2 flex-1">
              {/* Like with Reactions */}
              <div className="relative flex-1">
                <Button 
                  variant="ghost" 
                  className={`w-full gap-2 ${liked || selectedReaction ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setLiked(!liked)
                  }}
                  onMouseEnter={() => {
                    // Could show reaction picker here
                  }}
                >
                  <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  Like
                </Button>
                
                {/* Quick reaction buttons */}
                <div className="absolute top-0 left-0 right-0 -translate-y-full bg-background border rounded-lg shadow-lg p-2 hidden group-hover:flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => handleReaction('heart', e)}
                    className={selectedReaction === 'heart' ? 'bg-red-100' : ''}
                  >
                    ❤️
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => handleReaction('laugh', e)}
                    className={selectedReaction === 'laugh' ? 'bg-yellow-100' : ''}
                  >
                    😂
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => handleReaction('wow', e)}
                    className={selectedReaction === 'wow' ? 'bg-blue-100' : ''}
                  >
                    😮
                  </Button>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="flex-1 gap-2 text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/feed/post/${post.id}#comments`)
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
              
              <Button 
                variant="ghost" 
                className="flex-1 gap-2 text-muted-foreground hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Comments Preview */}
          {post.comments > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground mb-2">
                Latest comments:
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b6491e79?w=24&h=24&fit=crop&crop=face" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">User Name</span>
                    <span className="text-muted-foreground ml-2">Great post! Thanks for sharing.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
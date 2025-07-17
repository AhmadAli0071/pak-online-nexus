import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Heart, MessageCircle, Share, MoreHorizontal, ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'

// Mock data - in real app, fetch based on ID
const postData = {
  id: 1,
  user: {
    name: "Ahmad Hassan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    verified: true
  },
  timestamp: "2 hours ago",
  content: "Just launched my new online store on Pakistan Online! 🎉 Excited to serve customers across the country. Check out our amazing collection of handmade crafts.",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  likes: 23,
  comments: 8,
  shares: 3,
  type: "post" as const
}

const comments = [
  {
    id: 1,
    user: {
      name: "Fatima Khan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6491e79?w=40&h=40&fit=crop&crop=face"
    },
    content: "Congratulations! Your crafts look amazing. Best of luck with your business!",
    timestamp: "1 hour ago",
    likes: 3
  },
  {
    id: 2,
    user: {
      name: "Ali Ahmed",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    content: "This is inspiring! I've been thinking about starting my own business too.",
    timestamp: "45 minutes ago",
    likes: 1
  },
  {
    id: 3,
    user: {
      name: "Sara Malik",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    content: "Love the designs! Do you ship to Karachi?",
    timestamp: "30 minutes ago",
    likes: 2
  }
]

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/feed')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Feed
            </Button>
          </motion.div>

          {/* Main Post */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Card className="mb-6">
              <CardContent className="p-6">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={postData.user.avatar} />
                      <AvatarFallback>{postData.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground text-lg">{postData.user.name}</p>
                        {postData.user.verified && (
                          <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground">{postData.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="mb-6">
                  <p className="text-foreground leading-relaxed text-lg mb-4">
                    {postData.content}
                  </p>
                  
                  {postData.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={postData.image}
                        alt="Post image"
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between py-3 border-y border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{postData.likes} likes</span>
                    <span>{postData.comments} comments</span>
                    <span>{postData.shares} shares</span>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-red-500">
                      <Heart className="h-5 w-5" />
                      Like
                    </Button>
                    <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                      <MessageCircle className="h-5 w-5" />
                      Comment
                    </Button>
                    <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                      <Share className="h-5 w-5" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Comments</h3>
                
                {/* Add Comment */}
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-border">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex gap-2">
                    <Input
                      placeholder="Write a comment..."
                      className="flex-1"
                    />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <Avatar>
                        <AvatarImage src={comment.user.avatar} />
                        <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-muted rounded-lg p-3">
                          <p className="font-semibold text-foreground text-sm mb-1">
                            {comment.user.name}
                          </p>
                          <p className="text-foreground">{comment.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{comment.timestamp}</span>
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                            Like ({comment.likes})
                          </Button>
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Video, Smile, X, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function CreatePost() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [postContent, setPostContent] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  const handlePost = () => {
    // Handle post submission
    console.log('Posting:', postContent, selectedImage)
    setPostContent("")
    setSelectedImage(null)
    setIsExpanded(false)
  }

  return (
    <>
      {/* Simple Create Post Trigger */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex-1 p-3 bg-muted rounded-full cursor-pointer hover:bg-muted/80 transition-colors">
                  <span className="text-muted-foreground">What's on your mind?</span>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Post</DialogTitle>
                </DialogHeader>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">Your Name</p>
                      <p className="text-sm text-muted-foreground">Public</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <Textarea
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="min-h-32 resize-none border-none text-lg placeholder:text-lg"
                  />

                  {/* Image Preview */}
                  {selectedImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full max-h-96 object-cover rounded-lg"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                        onClick={removeImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Media Options */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <span className="text-sm font-medium text-foreground">Add to your post</span>
                    <div className="flex items-center gap-2">
                      <label htmlFor="image-upload">
                        <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50" asChild>
                          <div>
                            <ImageIcon className="h-5 w-5" />
                          </div>
                        </Button>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                      
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                        <Video className="h-5 w-5" />
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="text-yellow-600 hover:bg-yellow-50">
                        <Smile className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Post Button */}
                  <Button 
                    className="w-full" 
                    onClick={handlePost}
                    disabled={!postContent.trim() && !selectedImage}
                  >
                    Post
                  </Button>
                </motion.div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
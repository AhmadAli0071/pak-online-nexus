import { useState } from "react";
import { Heart, MessageCircle, UserPlus, Camera, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const Notifications = () => {
  const [filter, setFilter] = useState("all");
  
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Emma Watson",
      action: "liked your photo",
      time: "2m",
      isRead: false,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      type: "follow",
      user: "John Doe",
      action: "started following you",
      time: "5m",
      isRead: false,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      type: "comment",
      user: "Lisa Chen",
      action: "commented on your post",
      time: "1h",
      isRead: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "This is absolutely beautiful! 😍",
    },
    {
      id: 4,
      type: "like",
      user: "Alex Rodriguez",
      action: "liked your photo",
      time: "2h",
      isRead: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      type: "follow",
      user: "Sophie Turner",
      action: "started following you",
      time: "3h",
      isRead: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      type: "comment",
      user: "Mike Johnson",
      action: "commented on your post",
      time: "1d",
      isRead: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content: "Great shot! Where was this taken?",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500 fill-red-500" />;
      case "comment":
        return <MessageCircle className="w-5 h-5 text-blue-primary" />;
      case "follow":
        return <UserPlus className="w-5 h-5 text-green-500" />;
      default:
        return <Camera className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === "unread") return !notif.isRead;
    if (filter === "likes") return notif.type === "like";
    if (filter === "comments") return notif.type === "comment";
    if (filter === "follows") return notif.type === "follow";
    return true;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All" },
            { id: "unread", label: "Unread" },
            { id: "likes", label: "Likes" },
            { id: "comments", label: "Comments" },
            { id: "follows", label: "Follows" },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={filter === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tab.id)}
              className={cn(
                "whitespace-nowrap",
                filter === tab.id && "bg-gradient-social"
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={cn(
              "p-4 hover:shadow-soft transition-all duration-200 cursor-pointer",
              !notification.isRead && "border-l-4 border-l-primary bg-blue-light/30"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={notification.avatar} alt={notification.user} />
                  <AvatarFallback>{notification.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1">
                  {getIcon(notification.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm">
                    <span className="font-medium">{notification.user}</span>
                    <span className="text-muted-foreground ml-1">{notification.action}</span>
                  </p>
                  {!notification.isRead && (
                    <Badge variant="default" className="h-2 w-2 p-0 rounded-full bg-primary" />
                  )}
                </div>
                
                {notification.content && (
                  <p className="text-sm text-muted-foreground mb-2 bg-muted p-2 rounded-lg">
                    {notification.content}
                  </p>
                )}
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{notification.time}</span>
                </div>
              </div>
              
              {notification.type === "follow" && !notification.isRead && (
                <div className="flex gap-2">
                  <Button size="sm" variant="default" className="bg-gradient-social">
                    Follow Back
                  </Button>
                  <Button size="sm" variant="outline">
                    Ignore
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No notifications</h3>
          <p className="text-muted-foreground">
            You're all caught up! Check back later for new activity.
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default Notifications;
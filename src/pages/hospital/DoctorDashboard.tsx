import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Clock, TrendingUp, Bell, Plus, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navbar from '@/components/Navbar'

const statsCards = [
  {
    title: "Total Patients",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Today's Appointments", 
    value: "18",
    change: "+3",
    icon: Calendar,
    color: "text-green-600"
  },
  {
    title: "Avg. Consultation Time",
    value: "23 min",
    change: "-2 min",
    icon: Clock,
    color: "text-orange-600"
  },
  {
    title: "Patient Satisfaction",
    value: "4.8/5",
    change: "+0.2",
    icon: TrendingUp,
    color: "text-purple-600"
  }
]

const upcomingAppointments = [
  {
    id: 1,
    patient: "Ahmed Ali",
    time: "09:00 AM",
    type: "Consultation",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    patient: "Fatima Khan", 
    time: "10:30 AM",
    type: "Follow-up",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    patient: "Muhammad Hassan",
    time: "11:15 AM", 
    type: "Surgery Consultation",
    status: "pending",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 4,
    patient: "Sarah Ahmed",
    time: "02:00 PM",
    type: "Check-up",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face"
  }
]

const recentPatients = [
  {
    id: 1,
    name: "Ali Raza",
    lastVisit: "2 days ago",
    condition: "Hypertension",
    status: "stable",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Aisha Malik",
    lastVisit: "1 week ago", 
    condition: "Diabetes",
    status: "monitoring",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Omar Sheikh",
    lastVisit: "3 days ago",
    condition: "Post-Surgery",
    status: "recovering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  }
]

export default function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Dr. Sarah Ahmed</p>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
              <Button variant="outline">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {stat.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Appointments */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Today's Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <motion.div
                          key={appointment.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={appointment.avatar} alt={appointment.patient} />
                              <AvatarFallback>{appointment.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground">{appointment.patient}</p>
                              <p className="text-sm text-muted-foreground">{appointment.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">{appointment.time}</p>
                            <Badge 
                              variant={appointment.status === 'confirmed' ? 'default' : 'outline'}
                              className="text-xs"
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Appointment
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      View Patient Records
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Send Notifications
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium">New appointment request</p>
                        <p className="text-muted-foreground text-xs">5 minutes ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Lab results available</p>
                        <p className="text-muted-foreground text-xs">1 hour ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Patient feedback received</p>
                        <p className="text-muted-foreground text-xs">2 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patients">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Patient Records</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Patient
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <motion.div
                      key={patient.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={patient.avatar} alt={patient.name} />
                          <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">Last visit: {patient.lastVisit}</p>
                          <p className="text-sm font-medium">{patient.condition}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={patient.status === 'stable' ? 'default' : 'outline'}
                        >
                          {patient.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View Records
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Schedule management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Practice Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Analytics dashboard coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
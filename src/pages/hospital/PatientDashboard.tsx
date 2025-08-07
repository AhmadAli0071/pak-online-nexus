import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  FileText, 
  Heart, 
  Bell, 
  User, 
  Plus, 
  Search,
  Clock,
  MapPin,
  Phone,
  Download
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navbar from '@/components/Navbar'

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Ahmed",
    hospital: "Shaukat Khanum Hospital",
    specialty: "Medical Oncology",
    date: "2024-01-15",
    time: "10:30 AM",
    status: "confirmed",
    type: "Consultation",
    avatar: "https://images.unsplash.com/photo-1594824815434-9b96ad9d4149?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    doctor: "Dr. Muhammad Hassan",
    hospital: "Aga Khan Hospital",
    specialty: "Cardiology",
    date: "2024-01-18",
    time: "2:00 PM", 
    status: "pending",
    type: "Follow-up",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=40&h=40&fit=crop&crop=face"
  }
]

const medicalHistory = [
  {
    id: 1,
    date: "2024-01-10",
    doctor: "Dr. Sarah Ahmed",
    hospital: "Shaukat Khanum Hospital",
    diagnosis: "Routine Checkup",
    status: "completed",
    report: true
  },
  {
    id: 2,
    date: "2023-12-15",
    doctor: "Dr. Ali Khan",
    hospital: "Lahore General Hospital", 
    diagnosis: "Blood Pressure Monitoring",
    status: "completed",
    report: true
  },
  {
    id: 3,
    date: "2023-11-22",
    doctor: "Dr. Fatima Malik",
    hospital: "Children Hospital",
    diagnosis: "Annual Physical",
    status: "completed", 
    report: false
  }
]

const healthMetrics = [
  {
    title: "Blood Pressure",
    value: "120/80",
    status: "Normal",
    lastChecked: "2 days ago",
    color: "text-green-600"
  },
  {
    title: "Heart Rate",
    value: "72 bpm",
    status: "Normal", 
    lastChecked: "2 days ago",
    color: "text-green-600"
  },
  {
    title: "Weight",
    value: "70 kg",
    status: "Stable",
    lastChecked: "1 week ago",
    color: "text-blue-600"
  },
  {
    title: "Blood Sugar",
    value: "95 mg/dL", 
    status: "Normal",
    lastChecked: "3 days ago",
    color: "text-green-600"
  }
]

const prescriptions = [
  {
    id: 1,
    medication: "Lisinopril 10mg",
    doctor: "Dr. Sarah Ahmed",
    frequency: "Once daily",
    duration: "30 days",
    remaining: "15 days",
    status: "active"
  },
  {
    id: 2,
    medication: "Metformin 500mg",
    doctor: "Dr. Ali Khan", 
    frequency: "Twice daily",
    duration: "90 days",
    remaining: "45 days",
    status: "active"
  }
]

export default function PatientDashboard() {
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
              <h1 className="text-3xl font-bold text-foreground mb-2">My Health Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Ahmed Ali</p>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Health Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        {metric.title}
                      </p>
                      <Heart className={`h-4 w-4 ${metric.color}`} />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">
                      {metric.value}
                    </p>
                    <p className={`text-sm font-medium ${metric.color}`}>
                      {metric.status}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {metric.lastChecked}
                    </p>
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
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Appointments */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <motion.div
                          key={appointment.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={appointment.avatar} alt={appointment.doctor} />
                                <AvatarFallback>{appointment.doctor.split(' ').slice(1).map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-foreground">{appointment.doctor}</p>
                                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{appointment.hospital}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge 
                                variant={appointment.status === 'confirmed' ? 'default' : 'outline'}
                                className="mb-2"
                              >
                                {appointment.status}
                              </Badge>
                              <p className="text-sm font-medium">{appointment.date}</p>
                              <p className="text-sm text-muted-foreground">{appointment.time}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Phone className="h-3 w-3 mr-1" />
                              Call Hospital
                            </Button>
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
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
                      Book New Appointment
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      View Lab Reports
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Health Tracker
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Reminders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium">Take Medication</p>
                        <p className="text-muted-foreground text-xs">Lisinopril - Due in 2 hours</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Appointment Tomorrow</p>
                        <p className="text-muted-foreground text-xs">Dr. Sarah Ahmed - 10:30 AM</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Lab Results Available</p>
                        <p className="text-muted-foreground text-xs">Blood work from last week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Medical History</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search history..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record) => (
                    <motion.div
                      key={record.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground">{record.diagnosis}</p>
                        <p className="text-sm text-muted-foreground">{record.doctor} - {record.hospital}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{record.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">
                          {record.status}
                        </Badge>
                        {record.report && (
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3 mr-1" />
                            Report
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Current Prescriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescriptions.map((prescription) => (
                    <motion.div
                      key={prescription.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-muted rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{prescription.medication}</h4>
                        <Badge variant={prescription.status === 'active' ? 'default' : 'outline'}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Prescribed by {prescription.doctor}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Frequency: </span>
                          <span className="font-medium">{prescription.frequency}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Duration: </span>
                          <span className="font-medium">{prescription.duration}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-muted-foreground">Remaining: </span>
                        <span className="text-sm font-medium text-red-600">{prescription.remaining}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Patient Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Profile management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
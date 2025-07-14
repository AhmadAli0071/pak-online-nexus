import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Combobox } from '@headlessui/react'
import { Search, ChevronDown, User } from 'lucide-react'
import { motion } from 'framer-motion'

const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
  "Peshawar", "Quetta", "Multan", "Gujranwala", "Sialkot",
  "Hyderabad", "Bahawalpur", "Sargodha", "Sukkur", "Larkana",
  "Sheikhupura", "Jhang", "Rahim Yar Khan", "Gujrat", "Kasur",
  "Mardan", "Mingora", "Dera Ghazi Khan", "Sahiwal", "Okara",
  "Wah Cantonment", "Burewala", "Kohat", "Khanewal", "Hafizabad",
  "Abbottabad", "Muzaffarabad", "Gilgit", "Skardu", "Chitral"
]

const navigationLinks = [
  { name: 'Store', href: '/store' },
  { name: 'Education', href: '/education' },
  { name: 'Feed', href: '/feed' },
  { name: 'Marketplace', href: '/marketplace' },
]

export default function Navbar() {
  const [selectedCity, setSelectedCity] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filteredCities =
    query === ''
      ? cities
      : cities.filter((city) =>
          city.toLowerCase().includes(query.toLowerCase())
        )

  const handleProfileClick = () => {
    // For now, redirect to login. In a real app, check auth state
    navigate('/login')
  }

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-b border-primary fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold text-primary">
              Pakistan Online
            </Link>
          </div>

          {/* Center - City Selector */}
          <div className="flex-1 flex justify-center px-8">
            <div className="w-full max-w-xs">
              <Combobox value={selectedCity} onChange={setSelectedCity} as="div">
                <div className="relative">
                  <Combobox.Input
                    className="w-full rounded-lg border border-border bg-background py-2 pl-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Select City"
                    displayValue={(city: string) => city}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Combobox.Button>
                </div>
                <Combobox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-lg bg-background border border-border shadow-lg">
                  {/* Search header */}
                  <div className="border-b border-border px-3 py-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search cities..."
                        className="w-full pl-8 pr-3 py-2 text-sm rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city) => (
                      <Combobox.Option
                        key={city}
                        value={city}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-2 text-sm ${
                            active ? 'bg-accent text-primary' : 'text-text-blue-dark'
                          }`
                        }
                      >
                        {city}
                      </Combobox.Option>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-muted-foreground">
                      No cities found.
                    </div>
                  )}
                </Combobox.Options>
              </Combobox>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-text-blue-dark hover:text-primary transition-colors duration-200 relative group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Profile Icon */}
            <motion.button
              onClick={handleProfileClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
            >
              <User className="h-5 w-5 text-text-blue-dark hover:text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
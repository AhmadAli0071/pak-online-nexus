import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // TODO: Implement actual user registration
    console.log('Signup attempt:', { fullName, email, password })
    
    // For now, redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-card rounded-2xl shadow-card p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-text-blue-dark">
              Create Your Account
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-text-blue-dark">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-text-blue-dark">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-text-blue-dark">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-text-blue-dark">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-button"
            >
              Sign Up
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-text-blue-gray">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary-hover transition-colors duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
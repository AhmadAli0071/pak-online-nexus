import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import bgImage from '@/assets/hero-home.jpg'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', email)
    setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-lg p-10 w-full max-w-md text-white">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold mb-2">M</div>
          <h2 className="text-2xl font-semibold">Forgot Password</h2>
        </div>

        {/* Message after submission */}
        {submitted ? (
          <div className="text-center space-y-4">
            <p className="text-white/80">
              If your email is registered, you’ll receive a reset link shortly.
            </p>
            <Link to="/login" className="text-blue-300 hover:underline">
              Back to Login
            </Link>
          </div>
        ) : (
          // Form
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mt-1 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 rounded-full py-2 font-semibold"
            >
              Send Reset Link
            </Button>
          </form>
        )}

        {/* Back to login */}
        {!submitted && (
          <div className="mt-6 text-center text-sm">
            <Link to="/login" className="text-blue-300 hover:underline">
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

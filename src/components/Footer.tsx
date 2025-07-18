import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" }
];

const socialLinks = [
  { icon: Facebook, href: "#facebook", label: "Facebook" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
];

export function Footer() {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              MY Online 
            </motion.h3>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-md">
              Connecting communities, empowering businesses, and creating opportunities across MY Online through innovative digital solutions.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-slate-300"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span>info@MY Online online.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-slate-300"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span>+92 300 1234567</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-slate-300"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span>Karachi, MY Online </span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 block py-1 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <nav className="space-y-3">
              {[
                { label: "Online Store", href: "/store" },
                { label: "Create Shop", href: "/create-shop" },
                { label: "Education", href: "/education" },
                { label: "Community", href: "/feed" }
              ].map((link, index) => (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 block py-1 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Copyright */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-slate-400 text-center"
            >
              <p className="font-medium">
                © 2024 MY Online . All rights reserved.
              </p>
              <p className="text-sm mt-1">
                Built with ❤️ for MY Online 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
import { motion } from 'framer-motion'
import HospitalCard from './HospitalCard'
import { Hospital } from '../../pages/Hospital'
import { Building2 } from 'lucide-react'

interface HospitalGridProps {
  hospitals: Hospital[]
}

export default function HospitalGrid({ hospitals }: HospitalGridProps) {
  if (hospitals.length === 0) {
    return (
      <div className="text-center py-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No hospitals found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hospitals.map((hospital, index) => (
        <motion.div
          key={hospital.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <HospitalCard hospital={hospital} />
        </motion.div>
      ))}
    </div>
  )
}
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function FloatingIcosahedron() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <Icosahedron args={[2, 0]}>
        <meshStandardMaterial color="#1E40AF" wireframe opacity={0.1} transparent />
      </Icosahedron>
    </mesh>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background h-screen">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingIcosahedron />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-8 py-24 text-center h-full flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-medium text-text-blue-dark mb-6"
          >
            Welcome to Pakistan Online
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-blue-gray mb-12 max-w-2xl mx-auto"
          >
            Your city's all‑in‑one hub for shopping, learning & community.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="pill" 
              size="xl" 
              className="text-lg font-medium px-12 py-4 h-14"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
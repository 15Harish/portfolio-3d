import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { Download, Github, Linkedin, ArrowDown, Sparkles } from 'lucide-react';

// 3D Text Component
function Hero3DText() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        font="/fonts/inter-bold.woff"
        fontSize={1.5}
        color="#FF6B6B"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        HARISH G
        <MeshDistortMaterial distort={0.2} speed={2} />
      </Text>
    </Float>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Harish_G_Resume.pdf';
    link.download = 'Harish_G_Resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Welcome to my digital universe</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                I'm{' '}
                <motion.span
                  className="gradient-text inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Harish G
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-3xl md:text-5xl text-gray-300"
                >
                  Web Developer from{' '}
                  <motion.span
                    className="inline-block px-3 py-1 bg-primary/20 rounded-lg border border-primary/30 neon-pink"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    Chennai
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                Passionate about crafting{' '}
                <motion.span
                  className="text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  intuitive
                </motion.span>{' '}
                and{' '}
                <motion.span
                  className="text-secondary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  visually stunning
                </motion.span>{' '}
                digital experiences. I turn complex ideas into user-friendly designs that live on the web.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 107, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 neon-pink"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.button>

              <motion.a
                href="https://github.com/15Harish"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(74, 144, 226, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group glass border border-secondary/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 neon-blue"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View GitHub</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4 mt-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/harish-g-414474283/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full border border-blue-500/30 neon-blue"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="https://github.com/15Harish"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full border border-gray-500/30"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - 3D ID Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ rotateY: 15, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="w-80 h-96 glass-dark rounded-3xl p-8 border border-white/10 neon-pink transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-3xl holographic opacity-30" />
                
                <div className="relative z-10 text-center h-full flex flex-col justify-between">
                  {/* Profile Section */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary neon-pink flex items-center justify-center text-2xl font-bold relative overflow-hidden"
                    >
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <span className="relative z-10">HG</span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-2 gradient-text">Harish G</h3>
                    <p className="text-gray-400 mb-1">Pre-Final Year IT Student</p>
                    <p className="text-sm text-gray-500 mb-4">Loyola ICAM College</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 glass rounded-lg">
                      <span className="text-xs text-gray-400">CGPA</span>
                      <span className="text-sm font-semibold text-primary">7.9</span>
                    </div>
                    <div className="flex justify-between items-center p-2 glass rounded-lg">
                      <span className="text-xs text-gray-400">Projects</span>
                      <span className="text-sm font-semibold text-secondary">10+</span>
                    </div>
                    <div className="flex justify-between items-center p-2 glass rounded-lg">
                      <span className="text-xs text-gray-400">Experience</span>
                      <span className="text-sm font-semibold text-green-400">2+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
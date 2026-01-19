import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "Hackathon Winner - CTRL+ALT+HACK",
    description: "Built gamified web app and won ₹7500 prize",
    year: "2024",
    type: "Competition",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    details: "Developed Earthify - a gamified environmental awareness platform"
  },
  {
    title: "Internship - Prodapt Solutions",
    description: "1-month internship in Delivery Department with GenAI focus",
    year: "June-July 2025",
    type: "Professional",
    icon: Award,
    color: "from-blue-400 to-purple-500",
    details: "Worked on AI-powered delivery optimization systems"
  },
  {
    title: "BSNL Data Networking Training",
    description: "1-week intensive training in Data Networking technologies",
    year: "2024",
    type: "Training",
    icon: Medal,
    color: "from-green-400 to-teal-500",
    details: "Comprehensive training on network protocols and infrastructure"
  },
  {
    title: "Chess Team Captain",
    description: "Captain of Chess Team, Loyola ICAM College",
    year: "2024-2026",
    type: "Leadership",
    icon: Star,
    color: "from-purple-400 to-pink-500",
    details: "Leading the college chess team and organizing tournaments"
  },
  {
    title: "Chess Zonal Champion",
    description: "1st Prize in Chess Zonal Competition",
    year: "2023",
    type: "Achievement",
    icon: Trophy,
    color: "from-red-400 to-pink-500",
    details: "Won the zonal level chess championship"
  },
  {
    title: "Cultural Secretary - IT Department",
    description: "Cultural Secretary for ENGENIA 2024-2025",
    year: "2024-2025",
    type: "Leadership",
    icon: Award,
    color: "from-indigo-400 to-blue-500",
    details: "Organizing cultural events and managing department activities"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones, recognitions, and professional accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255, 107, 107, 0.2)"
                }}
                className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white mb-2`}>
                    {cert.type}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-gray-400 italic">
                    {cert.details}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="glass-dark rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Additional Involvement</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>10+ Hackathon Participations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>CSI Club Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Pattarai Club Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Grait & NSO Clubs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
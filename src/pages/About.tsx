import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Target, Linkedin } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer crafting the future of web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <div className="glass-dark rounded-3xl p-8 border border-white/10 neon-blue">
              <h2 className="text-3xl font-bold mb-6">
                Why do I do all of <span className="text-primary">this?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I believe in the power of decentralization and digital ownership. My mission is to create 
                digital experiences that not only look beautiful but also empower users to take control 
                of their digital lives. Every line of code I write is a step towards a more open and 
                accessible web.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a Pre-Final Year Information Technology student at Loyola ICAM College of Engineering, 
                I'm constantly exploring new technologies and pushing the boundaries of what's possible 
                in web development.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass p-6 rounded-xl border border-primary/30 neon-pink">
              <div className="flex items-start gap-4">
                <Code className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web3 & Fullstack Expert</h3>
                  <p className="text-gray-400">
                    Building decentralized applications with modern web technologies, focusing on user 
                    experience and blockchain integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-secondary/30 neon-blue">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Contract Specialist</h3>
                  <p className="text-gray-400">
                    Developing secure smart contracts using Solidity and Move, ensuring robust and 
                    efficient blockchain solutions.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://linkedin.com/in/harish-g-4144742833"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
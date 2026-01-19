import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's work together on your next project. I'm always excited to discuss new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
            <div className="space-y-6">
              <motion.a
                href="mailto:hsirah16@gmail.com"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 glass-dark rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">hsirah16@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:7358085526"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 glass-dark rounded-xl border border-white/10 hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+91 7358085526</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 glass-dark rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/15Harish"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full border border-gray-500/30 hover:border-gray-400 transition-colors neon-blue"
                >
                  <Github className="w-6 h-6 text-gray-400" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/harish-g-4144742833"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors neon-blue"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-dark rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 glass rounded-lg border border-white/10 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 glass rounded-lg border border-white/10 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full p-4 glass rounded-lg border border-white/10 focus:border-primary focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 neon-pink"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
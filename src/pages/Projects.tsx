import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Info, Star, GitBranch } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Earthify",
    description: "A gamified web application for teens promoting eco-tasks, rewards, and real-world impact through NGO partnerships. Features include task tracking, reward systems, and environmental impact visualization.",
    longDescription: "Earthify is a comprehensive platform that gamifies environmental consciousness among teenagers. The application includes user authentication, task management, reward systems, leaderboards, and real-time impact tracking. Built with modern web technologies and integrated with NGO APIs for real-world environmental projects.",
    tags: ["React", "Gamification", "Web Development", "Environmental", "NGO Integration"],
    github: "https://github.com/15Harish/Earthify",
    demo: "#",
    image: "/projects/earthify.jpg",
    color: "from-green-400 to-blue-500",
    stats: {
      stars: 24,
      forks: 8,
      commits: 156
    },
    features: [
      "Gamified task system",
      "Real-time impact tracking",
      "NGO partnership integration",
      "Reward and achievement system",
      "Social leaderboards"
    ]
  },
  {
    id: 2,
    name: "PortfolioForge-AI",
    description: "An AI-powered chatbot that converts uploaded Resume PDFs into dynamic, professional portfolios. Features intelligent parsing, template selection, and real-time preview generation.",
    longDescription: "PortfolioForge-AI leverages advanced AI algorithms to analyze resume content and automatically generate stunning portfolio websites. The system includes PDF parsing, content extraction, template matching, and dynamic website generation with customizable themes and layouts.",
    tags: ["AI", "React", "PDF Processing", "Machine Learning", "Automation"],
    github: "https://github.com/15Harish/AIPortfolioGenerator",
    demo: "#",
    image: "/projects/portfolio-ai.jpg",
    color: "from-purple-400 to-pink-500",
    stats: {
      stars: 42,
      forks: 15,
      commits: 203
    },
    features: [
      "AI-powered PDF parsing",
      "Intelligent content extraction",
      "Dynamic template generation",
      "Real-time preview",
      "Customizable themes"
    ]
  },
  {
    id: 3,
    name: "SP Sports Academy",
    description: "A responsive website showcasing clean layouts for a Professional Basketball and Child Fitness Academy. Features modern design, course information, and booking systems.",
    longDescription: "SP Sports Academy website is a comprehensive platform for a professional sports academy. It includes course catalogs, trainer profiles, booking systems, payment integration, and responsive design optimized for all devices. The site emphasizes user experience and conversion optimization.",
    tags: ["Responsive Design", "Static Site", "Sports", "Academy", "Booking System"],
    github: "https://github.com/sp-sports/spsports-website",
    demo: "https://spsportsacademy.com",
    image: "/projects/sp-sports.jpg",
    color: "from-orange-400 to-red-500",
    stats: {
      stars: 18,
      forks: 5,
      commits: 89
    },
    features: [
      "Responsive design",
      "Course management",
      "Trainer profiles",
      "Online booking",
      "Payment integration"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: 2 },
    { id: 'ai', label: 'AI/ML', count: 1 },
    { id: 'responsive', label: 'Responsive', count: 1 }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 pb-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.05 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore my portfolio of innovative web applications, AI-powered tools, and responsive designs.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                filter === filterItem.id
                  ? 'glass neon-pink text-white border border-primary/30'
                  : 'glass-dark text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{filterItem.label}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {filterItem.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="text-6xl font-bold text-white/20"
                    >
                      {project.name.charAt(0)}
                    </motion.div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass rounded-full border border-white/20 neon-blue"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 glass rounded-full border border-white/20 neon-pink"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      className="text-gray-400 group-hover:text-primary transition-colors"
                    >
                      <Info className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>•</span>
                      <span>{project.stats.commits} commits</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-dark rounded-3xl p-8 border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold gradient-text mb-2">
                          {project.name}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars} stars</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitBranch className="w-4 h-4" />
                            <span>{project.stats.forks} forks</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 glass rounded-full border border-white/20 hover:border-primary/30 transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className={`h-64 bg-gradient-to-br ${project.color} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                          <div className="text-8xl font-bold text-white/20">
                            {project.name.charAt(0)}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 text-white">Description</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Code</span>
                          </motion.a>
                          {project.demo !== '#' && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center space-x-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                        <div className="space-y-3 mb-6">
                          {project.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-3 p-3 glass rounded-lg border border-white/10"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
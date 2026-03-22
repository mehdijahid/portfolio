import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const techIcons = [
  { name: 'React', color: '#61DAFB', delay: 0 },
  { name: 'Laravel', color: '#FF2D20', delay: 0.5 },
  { name: 'Node.js', color: '#339933', delay: 1 },
  { name: 'Python', color: '#3776AB', delay: 1.5 },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-blue/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-digital-purple/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/10 blur-3xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-electric-blue/10 text-electric-blue border-electric-blue/20"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Opportunities
              </Badge>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              <span className="text-gradient">El Mehdi El Jahid</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Code2 className="w-5 h-5 text-electric-blue" />
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                Full Stack Web Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building intelligent, scalable web applications with modern
              technologies. Specialized in React, Laravel, and AI integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-accent text-white hover:opacity-90 transition-opacity glow-blue"
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-electric-blue/50 hover:bg-electric-blue/10"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-electric-blue/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/el-mehdi-el-jahid-b6a3132a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-electric-blue/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:Jahidmehdi990@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-electric-blue/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Orbital Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Orbital Ring */}
            <div className="absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]">
              {/* Orbit Path */}
              <div className="absolute inset-0 rounded-full border border-dashed border-electric-blue/30 animate-spin-slow" />
              
              {/* Tech Icons Orbiting */}
              {techIcons.map((tech, index) => {
                const angle = (index * 360) / techIcons.length;
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      border: `2px solid ${tech.color}`,
                      boxShadow: `0 0 20px ${tech.color}40`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: tech.delay,
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        transform: `rotate(${-angle}deg) translateX(175px) rotate(${angle}deg)`,
                      }}
                    >
                      {tech.name[0]}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Profile Image Container */}
            <motion.div
              className="relative w-90 h-90 sm:w-96 sm:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-50 blur-2xl animate-pulse-glow" />
              
              {/* Image Border */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-electric-blue via-digital-purple to-hot-magenta">
               <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center scale-100">
                  <img
                    src={`${import.meta.env.BASE_URL}edited_image.jpg`}
                    alt="El Mehdi El Jahid"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-medium text-neon-cyan">3+ Years</span>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-electric-blue"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';



export function About() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-digital-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-electric-blue/10 text-electric-blue mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Let Me <span className="text-gradient">Introduce</span> Myself
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-electric-blue/50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-digital-purple/50" />
              
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-digital-purple/20 mix-blend-overlay" />
                <img
                  src={`${import.meta.env.BASE_URL}profile_2.jpeg`}
                  alt="El Mehdi El Jahid"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div
                className="absolute -bottom-6 -right-6 p-4 rounded-xl glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">Salé, Morocco</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 p-4 rounded-xl glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-digital-purple/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-digital-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Education</p>
                    <p className="text-sm font-medium">ISMAGI Rabat</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <Code2 className="w-5 h-5 text-electric-blue" />
                <span className="text-sm font-medium text-muted-foreground">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h3
                className="text-2xl sm:text-3xl font-heading font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Crafting Digital Experiences with{' '}
                <span className="text-gradient">Modern Technologies</span>
              </motion.h3>

              <motion.div
                className="space-y-4 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <p>
                  Full Stack Web Developer currently pursuing a degree in Web and
                  Mobile Development at <strong className="text-foreground">ISMAGI (Rabat)</strong>.
                  Previously obtained a Specialized Technician diploma in Full Stack
                  Web Development from <strong className="text-foreground">CMC Rabat</strong>.
                </p>
                <p>
                  Focused on building modern user interfaces and complete web
                  applications using <span className="text-electric-blue">React</span>,{' '}
                  <span className="text-digital-purple">Laravel</span>, and{' '}
                  <span className="text-hot-magenta">AI technologies</span>. Strong
                  analytical thinking, adaptable, and comfortable working in team
                  environments.
                </p>
                <p>
                  I'm passionate about creating solutions that not only look great
                  but also deliver exceptional performance and user experience.
                  Currently exploring the intersection of web development and
                  artificial intelligence.
                </p>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Briefcase className="w-4 h-4 text-electric-blue" />
                  <span className="text-sm">Open to Work</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Code2 className="w-4 h-4 text-digital-purple" />
                  <span className="text-sm">Full Stack</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <GraduationCap className="w-4 h-4 text-hot-magenta" />
                  <span className="text-sm">Student</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}

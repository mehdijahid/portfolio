import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
} from 'lucide-react';

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Jahidmehdi990@gmail.com',
    href: 'mailto:Jahidmehdi990@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+212 702206047',
    href: 'tel:+212702206047',
    color: '#06b6d4',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Salé, Morocco',
    color: '#8b5cf6',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'El Mehdi El Jahid',
    href: 'https://linkedin.com/in/el-mehdi-el-jahid-b6a3132a3',
    color: '#0077b5',
  },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-blue/50" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-electric-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-electric-blue/10 text-electric-blue mb-4">
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Reach out and let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md w-full"
          >
            <h3 className="text-2xl font-heading font-bold mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl glass group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${info.color}20`,
                        color: info.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-electric-blue transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-electric-blue/10 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/el-mehdi-el-jahid-b6a3132a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-electric-blue/10 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:Jahidmehdi990@gmail.com"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-electric-blue/10 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} El Mehdi El Jahid. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
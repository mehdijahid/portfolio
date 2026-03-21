import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Image Analysis Web Application',
    description: 'Intelligent image analysis platform with Gemini AI integration',
    longDescription:
      'Developed a comprehensive image analysis platform that integrates the Gemini AI API. Features include an admin dashboard, intelligent image processing, and detailed analysis results with confidence scoring.',
    image: `${import.meta.env.BASE_URL}projet_ia_node.jpg`,
    technologies: ['React.js', 'Node.js', 'Gemini AI', 'REST API', 'Bootstrap'],
    featured: true,
    github: 'https://github.com/mehdijahid/AsMe-Vision_NodeJs',
  
  },
  {
    id: 2,
    title: 'AI Image Analysis Laravel Web Application',
    description: 'Intelligent image analysis platform with Gemini AI integration',
    longDescription:
      'Developed a comprehensive image analysis platform that integrates the Gemini AI API. Features include an admin dashboard, intelligent image processing, and detailed analysis results with confidence scoring.',
    image: `${import.meta.env.BASE_URL}laravel_ia.png`,
    technologies: ['Laravel', 'Gemini AI', 'REST API', 'Bootstrap'],
    featured: true,
    github: 'https://github.com/mehdijahid/AsMe-Vision_Laravel',
  },
  {
    id: 3,
    title: 'Automated CICD Sheet Generator',
    description: 'Internal control document generation system for ONCF',
    longDescription:
      'Built during internship at ONCF, this system automatically generates internal control documents (CICD sheets) with a RESTful API architecture for seamless integration.',
    image: `${import.meta.env.BASE_URL}CICD_image.png`,
    technologies: ['React.js', 'Laravel API', 'MySQL', 'RESTful API'],
    github: 'https://github.com/mehdijahid/CI-CD-Web',
  },
  {
    id: 4,
    title: 'Garage Management Platform',
    description: 'Complete management system for automotive businesses',
    longDescription:
      'A full-featured management system for garage operations including client management, vehicle tracking, repair scheduling, and appointment management with an intuitive admin dashboard.',
    image: `${import.meta.env.BASE_URL}garage.png`,
    technologies: ['React.js', 'Laravel API', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/mehdijahid/car-garage-website',
  },
  {
    id: 5,
    title: 'Restaurant Admin Dashboard',
    description: 'Admin interface for restaurant management',
    longDescription:
      'Comprehensive admin dashboard for managing restaurant operations including dishes, orders, ingredients, and categories with real-time updates and analytics.',
    image: `${import.meta.env.BASE_URL}project-restaurant.jpg`,
    technologies: ['Laravel', 'Bootstrap', 'JavaScript', 'MySQL'],
    github: 'https://github.com/mehdijahid/admin-interface-restaurant',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group ${project.featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl glass ${
          project.featured ? 'h-[400px] md:h-[500px]' : 'h-[350px]'
        }`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-gradient-accent text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured Project
            </Badge>
          </div>
        )}

        {/* Image */}
        <div className="absolute inset-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
            animate={{ opacity: isHovered ? 0.95 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-electric-blue/20 text-electric-blue border border-electric-blue/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h3
            className={`font-heading font-bold text-foreground mb-2 ${
              project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-sm mb-4 line-clamp-2"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered ? project.longDescription : project.description}
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-electric-blue/50 hover:bg-electric-blue/10"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Sheen Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-digital-purple/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-electric-blue/10 blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-neon-cyan/10 text-neon-cyan mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications built with
            modern technologies and best practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-electric-blue/50 hover:bg-electric-blue/10 group"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

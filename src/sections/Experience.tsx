import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin, Code2, GitBranch, Eye } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'work';
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Final Internship - Web Developer',
    company: 'ONCF (Moroccan National Railways)',
    location: 'Rabat, Morocco',
    period: 'April 2025 – May 2025',
    type: 'internship',
    description:
      'Developed a web application for generating CICD (Internal Control Documents) sheets automatically. Worked with Laravel and React to create a structured backend with API architecture.',
    technologies: ['Laravel', 'React', 'Git', 'REST API'],
  },
  {
    id: 2,
    title: 'Observation Internship',
    company: 'ONCF (Moroccan National Railways)',
    location: 'Rabat, Morocco',
    period: 'August 2024 – September 2024',
    type: 'internship',
    description:
      'Studied railway operational systems and learned about digital systems and enterprise workflows. Gained insights into large-scale IT infrastructure and digital transformation.',
  },
  {
    id: 3,
    title: 'Team Member',
    company: "McDonald's Rabat Agdal",
    location: 'Rabat, Morocco',
    period: 'April 2023 – June 2023',
    type: 'work',
    description:
      'Worked in a fast-paced environment, developing discipline, teamwork, and adaptability. Learned to handle pressure and deliver excellent customer service.',
  },
];

function ExperienceCard({
  experience,
  index,
  isLeft,
}: {
  experience: Experience;
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:items-center gap-8`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          className="relative p-6 rounded-2xl glass group"
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity" />

          <div className="relative">
            {/* Header */}
            <div
              className={`flex items-center gap-2 mb-3 ${
                isLeft ? 'md:justify-end' : ''
              }`}
            >
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  experience.type === 'internship'
                    ? 'bg-electric-blue/20 text-electric-blue'
                    : 'bg-hot-magenta/20 text-hot-magenta'
                }`}
              >
                {experience.type === 'internship' ? 'Internship' : 'Work'}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-heading font-bold text-foreground mb-1">
              {experience.title}
            </h3>

            {/* Company */}
            <div
              className={`flex items-center gap-4 mb-4 text-sm text-muted-foreground ${
                isLeft ? 'md:justify-end' : ''
              }`}
            >
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            </div>

            {/* Period */}
            <div
              className={`flex items-center gap-2 mb-4 text-sm ${
                isLeft ? 'md:justify-end' : ''
              }`}
            >
              <Calendar className="w-4 h-4 text-neon-cyan" />
              <span className="text-neon-cyan font-medium">
                {experience.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{experience.description}</p>

            {/* Technologies */}
            {experience.technologies && (
              <div
                className={`flex flex-wrap gap-2 ${
                  isLeft ? 'md:justify-end' : ''
                }`}
              >
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-secondary"
                  >
                    <Code2 className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
          style={{
            background:
              experience.type === 'internship'
                ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                : 'linear-gradient(135deg, #d946ef, #f43f5e)',
            boxShadow:
              experience.type === 'internship'
                ? '0 0 20px rgba(59, 130, 246, 0.5)'
                : '0 0 20px rgba(217, 70, 239, 0.5)',
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          {experience.type === 'internship' ? (
            <Eye className="w-5 h-5 text-white" />
          ) : (
            <Briefcase className="w-5 h-5 text-white" />
          )}
        </motion.div>
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              experience.type === 'internship'
                ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                : 'linear-gradient(135deg, #d946ef, #f43f5e)',
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Experience() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full hot-magenta/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-electric-blue/10 text-electric-blue mb-4">
            Career Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped
            my career as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-digital-purple to-hot-magenta hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-digital-purple to-hot-magenta md:hidden" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <GitBranch className="w-5 h-5 text-electric-blue" />
            <span className="text-sm text-muted-foreground">
              Always learning and growing...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

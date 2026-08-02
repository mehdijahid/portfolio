import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'ongoing' | 'completed';
  description?: string;
  icon: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor's Degree in Web and Mobile Development",
    institution: 'ISMAGI',
    location: 'Rabat, Morocco',
    period: '2025 - 2026',
    status: 'completed',
    description:
      'Obtained a License degree in Web and Mobile Development, with a focus on modern frameworks and technologies.',
    icon: 'B',
  },
  {
    id: 2,
    degree: 'Specialized Technician in Full Stack Web Development',
    institution: 'CMC Rabat',
    location: 'Rabat, Morocco',
    period: '2023 – 2025',
    status: 'completed',
    description:
      'Comprehensive training in full stack web development covering frontend, backend, databases, and deployment.',
    icon: 'T',
  },
  {
    id: 3,
    degree: 'Baccalaureate in Physics-Chemistry',
    institution: 'Lycée Lalla Aïcha',
    location: 'Rabat, Morocco',
    period: '2021 – 2022',
    status: 'completed',
    description:
      'Secondary education with focus on science subjects, developing analytical and problem-solving skills.',
    icon: 'S',
  },
];

function EducationCard({
  education,
  index,
}: {
  education: Education;
  index: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30, rotate: (index - 1) * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="relative p-6 rounded-2xl glass h-full"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              education.status === 'ongoing'
                ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                : 'bg-digital-purple/20 text-digital-purple border border-digital-purple/30'
            }`}
          >
            {education.status === 'ongoing' ? 'In Progress' : 'Completed'}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold"
            style={{
              background:
                education.status === 'ongoing'
                  ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                  : 'linear-gradient(135deg, #8b5cf6, #d946ef)',
              boxShadow:
                education.status === 'ongoing'
                  ? '0 0 20px rgba(6, 182, 212, 0.3)'
                  : '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          >
            <span className="text-white">{education.icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-lg font-heading font-bold text-foreground pr-20">
            {education.degree}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="w-4 h-4 text-electric-blue" />
            <span>{education.institution}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{education.location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan font-medium">{education.period}</span>
          </div>

          {education.description && (
            <p className="text-sm text-muted-foreground pt-2 border-t border-border/50">
              {education.description}
            </p>
          )}
        </div>

        {/* Decorative Corner */}
        <div
          className={`absolute bottom-0 right-0 w-20 h-20 opacity-10 ${
            education.status === 'ongoing' ? 'bg-neon-cyan' : 'bg-digital-purple'
          }`}
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Education() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-electric-blue/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-digital-purple/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-hot-magenta/10 text-hot-magenta mb-4">
            Academic Background
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the qualifications that have prepared me for
            a career in web development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {educations.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="p-6 rounded-2xl glass flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-electric-blue" />
            </div>
            <div>
              <h4 className="font-heading font-semibold">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Always exploring new technologies and best practices
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl glass flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

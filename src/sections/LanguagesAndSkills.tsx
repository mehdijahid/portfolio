import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Brain,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  Zap,
  Puzzle,
} from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
  icon: string;
}

interface SoftSkill {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const languages: Language[] = [
  { name: 'Arabic', level: 'Native', proficiency: 100, icon: 'AR' },
  { name: 'French', level: 'Fluent', proficiency: 90, icon: 'FR' },
  { name: 'English', level: 'Fluent', proficiency: 85, icon: 'EN' },
  { name: 'German', level: 'Basic', proficiency: 40, icon: 'DE' },
];

const softSkills: SoftSkill[] = [
  {
    name: 'Analytical Thinking',
    description: 'Breaking down complex problems into manageable solutions',
    icon: Brain,
    color: '#3b82f6',
  },
  {
    name: 'Adaptability',
    description: 'Quickly adjusting to new technologies and environments',
    icon: Zap,
    color: '#06b6d4',
  },
  {
    name: 'Autonomy',
    description: 'Self-motivated and capable of independent work',
    icon: Target,
    color: '#8b5cf6',
  },
  {
    name: 'Teamwork',
    description: 'Collaborating effectively with diverse teams',
    icon: Users,
    color: '#d946ef',
  },
  {
    name: 'Problem Solving',
    description: 'Finding creative solutions to challenging issues',
    icon: Puzzle,
    color: '#f43f5e',
  },
  {
    name: 'Communication',
    description: 'Clear and effective technical and non-technical communication',
    icon: MessageSquare,
    color: '#10b981',
  },
];

function LanguageCard({
  language,
  index,
}: {
  language: Language;
  index: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="relative p-5 rounded-xl glass text-center"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-accent flex items-center justify-center">
          <span className="text-white font-bold text-sm">{language.icon}</span>
        </div>

        {/* Name */}
        <h4 className="font-heading font-semibold text-foreground mb-1">
          {language.name}
        </h4>

        {/* Level */}
        <p className="text-sm text-muted-foreground mb-3">{language.level}</p>

        {/* Progress Bar */}
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-accent"
            initial={{ width: 0 }}
            whileInView={{ width: `${language.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SoftSkillCard({
  skill,
  index,
}: {
  skill: SoftSkill;
  index: number;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="relative p-5 rounded-xl glass h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
          }}
        />

        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: `${skill.color}20`,
              color: skill.color,
            }}
          >
            <Icon className="w-6 h-6" />
          </div>

          {/* Content */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-1">
              {skill.name}
            </h4>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LanguagesAndSkills() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="languages-skills"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-hot-magenta/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-neon-cyan/10 text-neon-cyan mb-4">
            Communication
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual capabilities that enable effective communication in
            diverse environments.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {languages.map((language, index) => (
            <LanguageCard key={language.name} language={language} index={index} />
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-digital-purple/10 text-digital-purple mb-4">
            Personal Attributes
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Soft <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond technical expertise, these qualities define my professional
            approach and work ethic.
          </p>
        </motion.div>

        {/* Soft Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block p-8 rounded-2xl glass max-w-2xl">
            <Lightbulb className="w-8 h-8 text-electric-blue mx-auto mb-4" />
            <p className="text-lg italic text-muted-foreground mb-4">
              "The combination of technical skills and soft skills creates the
              foundation for building successful projects and meaningful
              professional relationships."
            </p>
            <p className="text-sm font-medium text-foreground">
              — My Professional Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

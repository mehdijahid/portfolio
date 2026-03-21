import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'HTML5', icon: 'H', level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: 'C', level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: 'JS', level: 90, color: '#F7DF1E' },
      { name: 'Python', icon: 'Py', level: 75, color: '#3776AB' },
      { name: 'PHP', icon: 'P', level: 85, color: '#777BB4' },
      { name: 'SQL', icon: 'S', level: 80, color: '#4479A1' },
      { name: 'NoSQL', icon: 'N', level: 70, color: '#47A248' },
      { name: 'Node.js', icon: 'N', level: 85, color: '#339933' },
      { name: 'Java', icon: 'J', level: 75, color: '#1058f3' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React', icon: 'R', level: 90, color: '#61DAFB' },
      { name: 'Laravel', icon: 'L', level: 85, color: '#FF2D20' },
      { name: 'Spring Boot', icon: 'S', level: 75, color: '#01fe4d' },
      { name: 'Express Js', icon: 'E', level: 80, color: '#000000' },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'G', level: 85, color: '#F05032' },
      { name: 'Docker', icon: 'D', level: 70, color: '#2496ED' },
      { name: 'VS Code', icon: 'V', level: 95, color: '#007ACC' },
      { name: 'MySQL', icon: 'M', level: 80, color: '#4479A1' },
      { name: 'MongoDB', icon: 'M', level: 70, color: '#47A248' },
      { name: 'Microsoft Azure', icon: 'M', level: 70, color: '#0267c0' },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-4 rounded-xl glass cursor-pointer overflow-hidden"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
          }}
        />

        <div className="relative flex items-center gap-4">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold"
            style={{
              backgroundColor: `${skill.color}20`,
              color: skill.color,
              border: `2px solid ${skill.color}40`,
            }}
            animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            {skill.icon}
          </motion.div>

          {/* Info */}
          <div className="flex-1">
            <h4 className="font-medium text-foreground mb-1">{skill.name}</h4>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-blue/5 blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-digital-purple/10 text-digital-purple mb-4"
          >
            My Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build
            modern, scalable web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? 'bg-gradient-accent text-white shadow-glow-blue'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Infinite Marquee - All Skills */}
        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            Technologies I work with
          </p>
          <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Marquee */}
            <div className="flex animate-marquee">
              {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
                (skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex items-center gap-2 px-6 py-3 mx-2 rounded-full glass whitespace-nowrap"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

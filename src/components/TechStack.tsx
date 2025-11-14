import { Group, Badge, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { colors } from '../styles';

interface TechStackSectionProps {
  company: 'Mantra' | 'Acxiom' | 'HSBC' | 'Americorps';
}

function TechStackSection({ company }: TechStackSectionProps) {
  const techStacks = {
    Mantra: [
      'TypeScript',
      'React',
      'Node.js',
      'SQL',
      'ICD-10',
      'Healthcare Analytics',
    ],
    Acxiom: ['SQL', 'Python', 'ICD-10', 'Healthcare Analytics'],
    HSBC: ['SQL', 'GCP', 'Financial Analytics', 'Data Warehousing'],
    Americorps: ['SQL', 'Excel', 'ICD-10', 'Healthcare Analytics'],
  } as const;

  const techStack = techStacks[company];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box mt="xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Group justify="center" style={{ flexWrap: 'wrap' }}>
          {techStack.map((tech) => (
            <motion.div key={tech} variants={childVariants}>
              <Badge
                variant="filled"
                color="blue"
                size="lg"
                style={{
                  borderRadius: '999px',
                  backgroundColor: colors.purple,
                  color: 'white',
                  fontWeight: 500,
                  padding: '0.6rem 1rem',
                  fontSize: '0.95rem',
                  cursor: 'default',
                  userSelect: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 20px ${colors.boxbackground}`)
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </Group>
      </motion.div>
    </Box>
  );
}

export default TechStackSection;

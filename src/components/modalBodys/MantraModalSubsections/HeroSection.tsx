import { Container, Title, Text, Box, Center } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { introText, mainTitle, subtitle, description } from '../../../styles';
import TechStackSection from '../../TechStack';

function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  const { height } = useViewportSize();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const heroWrapper = {
    height: isMobile ? height : height - 300,
    display: 'flex',
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  return (
    <Box style={heroWrapper}>
      <Container>
        <Center>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={childVariants}>
              <Text style={introText}>Nov 2021 - Jan 2024</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Mantra Health</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                Software Engineer
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Fullstack engineer at a health-tech startup connecting college
                students with mental health providers. Developed a Node.js,
                TypeScript, and React-based application using GraphQL, AWS, and
                Postgres. Contributed to React Native mobile app conversion,
                ensuring deep link integrity and UX stability. Mitigated
                potential security/compliance issues related to HIPAA-sensitive
                customer data. Maintained high-quality code using ESLint, Airbnb
                JavaScript Style, and Jest for testing. 70% of patients reported
                Mantra helped them stay in school; 68% saw improved academic
                performance. Mantra now works with 110 campuses and supports
                800,000+ students.
              </Text>
            </motion.div>
            <TechStackSection />
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

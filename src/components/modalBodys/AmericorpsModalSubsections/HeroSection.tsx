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
              <Text style={introText}>May 2024 - Dec 2024</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Americorps</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                Volunteer
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Managed food distribution and coordinated outreach efforts for
                traditionally underserved communities. Conducted Excel-based
                data analysis, including generating heat maps, examining patient
                data, and collaborating directly with healthcare providers.
                Worked within the American healthcare system, specifically with
                Medication-Assisted Treatment (MAT) programs for opioid
                addiction patients.
              </Text>
            </motion.div>
            <TechStackSection company={'Americorps'} />
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

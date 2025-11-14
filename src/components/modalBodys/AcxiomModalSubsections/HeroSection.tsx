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
              <Text style={introText}>2025 - Current</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Acxiom</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                Health Analytics Engineer
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Designed and executed audience sizing analyses leveraging ICD-10
                medical coding to support healthcare marketing and research
                initiatives. Partnered with the Data Science team to develop and
                refine predictive models, optimizing for the highest Audience
                Quality Index (AQI) across campaigns. Developed and optimized
                SQL queries in Snowflake and proprietary in-house tools to
                process, segment, and validate millions of healthcare records
              </Text>
            </motion.div>
            <TechStackSection company={'Acxiom'} />
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

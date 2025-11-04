import { Container, Title, Text, Box, Center } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { introText, mainTitle, subtitle, description } from '../../../styles';

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
              <Text style={introText}>2015 - 2019</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Baruch</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                BBA: Statistics and Quantitative Modeling
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Proficiency in data-driven business modeling, forecasting, and
                optimization techniques. Experience with statistical programming
                languages such as Python, R, and SQL for data analysis. Strong
                foundation in statistical analysis, probability theory, and
                quantitative decision-making.
              </Text>
            </motion.div>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

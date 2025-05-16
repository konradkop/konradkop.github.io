import { Container, Title, Text, Box, Paper } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { Flex } from '@mantine/core';
import {
  introText,
  description,
  colors,
  timelineDotBlue,
  timelineHorizontalLineBlue,
} from '../../../styles';

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
    minHeight: height - 300,
    display: 'flex',
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  const items = [
    'Fullstack engineer at a health-tech startup connecting college students with mental health providers. Developed a Node.js, TypeScript, and React-based application using GraphQL, AWS, and Postgres.',
    'Contributed to React Native mobile app conversion, ensuring deep link integrity and UX stability.',
    'Mitigated potential security/compliance issues related to HIPAA-sensitive customer data.',
    'Maintained high-quality code using ESLint, Airbnb JavaScript Style, and Jest for testing.',
    '70% of patients reported Mantra helped them stay in school; 68% saw improved academic performance.',
    'Mantra now works with 110 campuses and supports 800,000+ students.',
  ];

  return (
    <Box style={heroWrapper}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title order={4} mb={5} style={description}>
            Mantra Health | Software Engineer | NYC
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introText}>
            Nov 2021 - Jan 2024
          </Text>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <br />
          <Flex direction="column" gap="md" style={{ position: 'relative' }}>
            <Box
              style={{
                position: 'absolute',
                top: 12,
                bottom: 0,
                left: '0.65rem',
                width: '2px',
                backgroundColor: colors.accent,
                zIndex: 0,
              }}
            />
            {items.map((item, index) => (
              <motion.div key={index} variants={childVariants}>
                <Flex
                  align="flex-start"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Box style={timelineHorizontalLineBlue} />
                  <Box style={timelineDotBlue} />
                  <Paper
                    withBorder
                    shadow="lg"
                    radius="md"
                    p="md"
                    mb="md"
                    style={{
                      backgroundColor: 'white',
                      flex: 1,
                    }}
                  >
                    <Text style={description}>{item}</Text>
                  </Paper>
                </Flex>
              </motion.div>
            ))}
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;

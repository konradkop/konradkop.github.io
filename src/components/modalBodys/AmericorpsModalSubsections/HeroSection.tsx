import { Container, Title, Text, Box, Paper, ScrollArea } from '@mantine/core';
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
    height: isMobile ? height : height - 300,
    display: 'flex',
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  const items = [
    'Managed food distribution and coordinated outreach efforts for traditionally underserved communities.',
    'Conducted Excel-based data analysis, including generating heat maps, examining patient data, and collaborating directly with healthcare providers.',
    'Worked within the American healthcare system, specifically with Medication-Assisted Treatment (MAT) programs for opioid addiction patients.',
    'Developed educational materials and conducted community workshops to increase awareness of healthcare resources and services.',
    'Assisted in the implementation of digital tools to streamline patient outreach and data tracking, improving efficiency in community health programs.',
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
            Americorps | Volunteer | NYC
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introText}>
            May 2024 - Dec 2024
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
            <ScrollArea h={500} type="never">
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
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        flex: 1,
                      }}
                    >
                      <Text style={description}>{item}</Text>
                    </Paper>
                  </Flex>
                </motion.div>
              ))}
            </ScrollArea>
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;

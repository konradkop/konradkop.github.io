import { Container, Title, Text, Box, Paper, ScrollArea } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { Flex } from '@mantine/core';
import {
  description,
  colors,
  timelineHorizontalLineBlue,
  timelineDotBlue,
  introText,
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
    alignItems: 'left',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  const items = [
    'Strong foundation in statistical analysis, probability theory, and quantitative decision-making.',
    'Proficiency in data-driven business modeling, forecasting, and optimization techniques.',
    'Experience with statistical programming languages such as Python, R, and SQL for data analysis.',
    'Expertise in econometrics, regression analysis, and time-series forecasting for business strategy.',
    'Hands-on experience with data visualization tools like Matplotlib.',
    'Understanding of risk management, financial modeling, and quantitative trading strategies.',
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
            Baruch | BBA: Statistics and Quantitative Modeling | NYC
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introText}>
            Sept 2015 - May 2019
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

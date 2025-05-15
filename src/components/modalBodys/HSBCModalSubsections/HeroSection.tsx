import { Container, Title, Text, Box, Paper } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { Flex } from '@mantine/core';
import {
  introTextRed,
  subtitle,
  description,
  colors,
  timelineDotRed,
  timelineHorizontalLineRed,
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
    'Developed a Node.js/Puppeteer based script to parse through company financial data, bypassing the need for user-based inputs, negating user error. Previously, a dedicated analyst had to spend hours going through documents.',
    'Harnessed SQL-based data analysis software to iterate over company data, enriching and joining it with other company systems to output a user-readable format.',
    'Used SQL to query company data hosted on GCP’s BigQuery and provide updated and enriched financial information.',
    'Tracked over 2,000 active company clients and provided monthly updates on each one for the rest of the bank, using VBA, Excel, and other internal databases.',
  ];

  return (
    <Box style={heroWrapper}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title order={4} mb={5} style={subtitle}>
            HSBC | Financial/Data Analyst | NYC
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introTextRed}>
            Aug 2019 - Aug 2021
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
                backgroundColor: colors.accentRed,
                zIndex: 0,
              }}
            />
            {items.map((item, index) => (
              <motion.div key={index} variants={childVariants}>
                <Flex
                  align="flex-start"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Box style={timelineHorizontalLineRed} />
                  <Box style={timelineDotRed} />
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

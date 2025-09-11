import {
  Container,
  Title,
  Text,
  Box,
  Paper,
  ScrollArea,
  Anchor,
  Flex,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import {
  introTextRed,
  description,
  colors,
  timelineHorizontalLineRed,
  timelineDotRed,
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
    'A sample app I created. Written in React, Typescript and deployed on Netlify',
    'Integrated with Google Maps',
    'Feel free to check it out!',
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
            Sample Delivery App |{' '}
            <Anchor
              href="https://konrad-delivery-app.netlify.app/"
              target="_blank"
              size="lg"
              style={{
                fontWeight: 'bold',
              }}
            >
              App Link
            </Anchor>
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introTextRed}>
            2024
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
            <ScrollArea h={500} type="never">
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

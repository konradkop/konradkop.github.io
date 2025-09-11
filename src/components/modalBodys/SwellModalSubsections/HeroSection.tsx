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
    alignItems: 'left',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  const items = [
    'Contributed to an electron-based desktop application using Node and React/Redux, allowing users to send client-side requests using REST, GraphQL, WebSocket, and WebRTC for endpoint testing.',
    'Created custom React hooks to improve site responsiveness and logic, and used Redux to consolidate state management, allowing for globally-scoped state access.',
    'Created binary data testing for WebSocket protocol, enabling users to send blobs such as images, export logs, create Chai assertions with Mocha on their requests, and create a custom WebSocket development server for testing.',
    'React/Redux, Mocha, and Chai tests were added primarily to give the client a more well-defined testing suite. Image limits are based on the client’s own server, which allows them to more accurately assess the user experience.',
    'Added test code snippets to client-side requests, allowing clients to test their servers. Users can write their own tests within a NodeVM environment and/or use the predefined snippet. Assertion tests are written in Chai/Mocha.',
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
            Swell | Open Source Developer
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introText}>
            2021
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

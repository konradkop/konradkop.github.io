import { Container, Title, Text, Box, Center, Anchor } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { subtitle, description } from '../../../styles';

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
    display: 'flex',
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
    height: isMobile ? height - 300 : height - 700,
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
              <Title order={2} style={subtitle}>
                Swell
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Anchor
                href="https://github.com/open-source-labs/Swell"
                target="_blank"
                size="lg"
                style={{
                  fontWeight: 'bold',
                }}
              >
                App Link
              </Anchor>
              <Text style={description}>
                Contributed to an electron-based desktop application using Node
                and React/Redux, allowing users to send client-side requests
                using REST, GraphQL, WebSocket, and WebRTC for endpoint testing.
                Created binary data testing for WebSocket protocol, enabling
                users to send blobs such as images, export logs, create Chai
                assertions with Mocha on their requests, and create a custom
                WebSocket development server for testing.
              </Text>
            </motion.div>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

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
                Sample Delivery App
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
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
              <Text style={description}>
                A sample app I created. Written in React, Typescript and
                deployed on Netlify. Integrated with Google Maps. Feel free to
                check it out!
              </Text>
            </motion.div>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

import {
  Container,
  Title,
  Text,
  Button,
  Anchor,
  Box,
  Center,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { introText, mainTitle, subtitle, description } from '../../../styles';
import { motion } from 'motion/react';
import { useState } from 'react';

interface HeroSectionProps {
  close: () => void;
}

interface DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

function HeroSection({ close }: HeroSectionProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');
  const { height } = useViewportSize();
  const [motionEnabled, setMotionEnabled] = useState(false);

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

  const requestMotionPermission = () => {
    const devOrientationEvent =
      DeviceOrientationEvent as DeviceOrientationEvent;

    if (
      devOrientationEvent.requestPermission &&
      typeof devOrientationEvent.requestPermission === 'function'
    ) {
      devOrientationEvent
        .requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            setMotionEnabled(true);
            alert('Motion access granted!');
          } else {
            alert('Permission denied for motion sensors.');
          }
        })
        .catch(console.error);
    } else {
      // For Android or older browsers
      setMotionEnabled(true);
      alert('Motion access enabled!');
    }
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
              <Text style={introText}>Hello, I&apos;m</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Konrad Kopko</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                Thanks for clicking on my website!
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                I am currently at{' '}
                <Anchor href="https://tech.cornell.edu/" c="blue">
                  Cornell Tech
                </Anchor>{' '}
                where I&apos;m getting my{' '}
                <Anchor
                  href="https://tech.cornell.edu/programs/masters-programs/jacobs-technion-cornell-dual-ms-health-tech/"
                  c="blue"
                >
                  Dual Master of Science Degrees with a Concentration in Health
                  Tech
                </Anchor>
                <br />
                <br />
                I&apos;m focusing my studies on Healthcare and Bioinformatics.
                Currently, I am actively looking for a role as a{' '}
                <Text span fw={700}>
                  ML Engineer/Software Engineer
                </Text>
              </Text>
            </motion.div>

            {isMobile && !motionEnabled && (
              <motion.div variants={childVariants} style={{ marginTop: 20 }}>
                <Button
                  variant="outline"
                  color="green"
                  radius="md"
                  size="md"
                  onClick={requestMotionPermission}
                >
                  Enable Motion Sensors
                </Button>
              </motion.div>
            )}

            <br />
            <motion.div variants={childVariants}>
              <Button
                variant="outline"
                color="blue"
                radius="md"
                size="md"
                onClick={close}
              >
                <Text span>Take a look at my experience!</Text>
              </Button>
              <br />
            </motion.div>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

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
              <Text style={introText}>2024 - 2026</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>Cornell</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                MS: Information Systems
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Earning an M.S. from Cornell University and an M.S. from
                Technion – Israel Institute of Technology, focusing on advanced
                computing in healthcare. Studies focusing on Health
                Infrastructure & Cloud Computing, building scalable, secure
                cloud solutions for large healthcare datasets, leveraging GCP,
                AWS, and distributed systems. AI & Machine Learning for
                Security: Explores AI-driven threat detection in health systems,
                fraud prevention in insurance claims, and anomaly detection in
                patient data. Startup Studio & Industry Partnerships: Provides
                hands-on experience working on real-world cybersecurity
                challenges in health tech through collaborations with hospitals,
                research labs, and tech companies.
              </Text>
            </motion.div>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

import { Container, Title, Text, Box, Paper, ScrollArea } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { Flex } from '@mantine/core';
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
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  const items = [
    'Earning an M.S. from Cornell University and an M.S. from Technion – Israel Institute of Technology, focusing on advanced computing in healthcare.',
    'Studies focusing on Health Infrastructure & Cloud Computing, building scalable, secure cloud solutions for large healthcare datasets, leveraging GCP, AWS, and distributed systems.',
    'AI & Machine Learning for Security: Explores AI-driven threat detection in health systems, fraud prevention in insurance claims, and anomaly detection in patient data.',
    'Blockchain & Data Integrity: Examines how blockchain technology secures patient records, prevents tampering, and enhances trust in health transactions.',
    'Regulatory & Compliance Expertise: Covers HIPAA, GDPR, and HITRUST frameworks to ensure compliance with global health data protection laws.',
    'Startup Studio & Industry Partnerships: Provides hands-on experience working on real-world cybersecurity challenges in health tech through collaborations with hospitals, research labs, and tech companies.',
    'Cybersecurity in Health Tech: Covers data privacy, encryption, and secure system design for EHRs, medical IoT devices, and telemedicine platforms.',
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
            Cornell | MS: Information Systems | NYC
          </Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="sm" style={introTextRed}>
            Sept 2025 - May 2026
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

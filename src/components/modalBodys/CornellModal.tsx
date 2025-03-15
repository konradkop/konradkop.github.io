import {
  Text,
  Title,
  List,
  ThemeIcon,
  Grid,
  Flex,
  Anchor,
} from '@mantine/core';
import cornellPhoto from '../../assets/cornell-rectangle.png';
import { motion } from 'motion/react';
import ModalImage from './ModalImage';

function CornellModal() {
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
    <>
      <ModalImage img={cornellPhoto} />
      <div
        style={{
          padding: '20px',
          background: 'white',
          color: 'black',
          borderRadius: '8px',
        }}
      >
        <Grid>
          <Flex direction={'column'} align="center" style={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Title order={4} mb={5}>
                <Anchor
                  href="https://tech.cornell.edu/"
                  target="_blank"
                  size="lg"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Cornell
                </Anchor>{' '}
                | MS: Information Systems | NYC
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text size="sm" color="gray">
                May 2024 - Dec 2024
              </Text>
            </motion.div>
          </Flex>
          <List spacing="sm" size="md" mt={10}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <List.Item
                  style={{ padding: 10 }}
                  icon={<ThemeIcon color="blue" size={10} radius="xl" />}
                >
                  {item}
                </List.Item>
              </motion.div>
            ))}
          </List>
        </Grid>
      </div>
    </>
  );
}

export default CornellModal;

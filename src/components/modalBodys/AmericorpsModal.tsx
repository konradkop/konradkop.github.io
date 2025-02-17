import { Text, Title, List, ThemeIcon, Grid, Image, Flex } from '@mantine/core';
import americorpsPhoto from '../../assets/americorps-rectangle.png';
import { motion } from 'motion/react';

function AmericorpsModal() {
  const items = [
    'Managed food distribution and coordinated outreach efforts for traditionally underserved communities.',
    'Conducted Excel-based data analysis, including generating heat maps, examining patient data, and collaborating directly with healthcare providers.',
    'Worked within the American healthcare system, specifically with Medication-Assisted Treatment (MAT) programs for opioid addiction patients.',
    'Developed educational materials and conducted community workshops to increase awareness of healthcare resources and services.',
    'Assisted in the implementation of digital tools to streamline patient outreach and data tracking, improving efficiency in community health programs.',
  ];

  return (
    <>
      <Image radius="md" h={200} src={americorpsPhoto} />
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
                Americorps | Volunteer | NYC
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
          <List spacing="sm" size="sm" mt={10}>
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

export default AmericorpsModal;

import { Text, Title, List, ThemeIcon, Grid, Image, Flex } from '@mantine/core';
import mantraPhoto from '../../assets/mantra-rectangle.jpg';
import { motion } from 'motion/react';

function MantraModal() {
  const items = [
    'Fullstack engineer at a health-tech startup connecting college students with mental health providers.',
    'Developed a Node.js, TypeScript, and React-based application using GraphQL, AWS, and Postgres.',
    'Joined as the 13th team member, growing to 50+ employees, mentoring 4 new hires.',
    'Led projects involving significant business logic changes, third-party integrations, and payment logic.',
    'Mantra now works with 110 campuses and supports 800,000+ students.',
    '70% of patients reported Mantra helped them stay in school; 68% saw improved academic performance.',
    'Contributed to React Native mobile app conversion, ensuring deep link integrity and UX stability.',
    'Mitigated potential security/compliance issues related to HIPAA-sensitive customer data.',
    'Maintained high-quality code using ESLint, Airbnb JavaScript Style, and Jest for testing.',
  ];

  return (
    <>
      <Image radius="md" h={200} src={mantraPhoto} />
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
                Mantra Health | Software Engineer | NYC
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text size="sm" color="gray">
                Nov 2021 - Jan 2024
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

export default MantraModal;

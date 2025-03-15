import { Text, Title, List, ThemeIcon, Grid, Flex } from '@mantine/core';
import hsbcPhoto from '../../assets/hsbc-rectangle.png';
import { motion } from 'motion/react';
import ModalImage from './ModalImage';

function HSBCModal() {
  const items = [
    'Developed a Node.js/Puppeteer based script to parse through company financial data, bypassing the need for user-based inputs, negating user error. Previously, a dedicated analyst had to spend hours going through documents.',
    'Harnessed SQL-based data analysis software to iterate over company data, enriching and joining it with other company systems to output a user-readable format.',
    'Used SQL to query company data hosted on GCP’s BigQuery and provide updated and enriched financial information.',
    'Tracked over 2,000 active company clients and provided monthly updates on each one for the rest of the bank, using VBA, Excel, and other internal databases.',
  ];

  return (
    <>
      <ModalImage img={hsbcPhoto} />
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
                HSBC | Financial/Data Analyst | NYC
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text size="sm" color="gray">
                Aug 2019 - Aug 2021
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

export default HSBCModal;

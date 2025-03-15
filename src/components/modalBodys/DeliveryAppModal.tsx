import {
  Text,
  Title,
  List,
  ThemeIcon,
  Grid,
  Flex,
  Anchor,
} from '@mantine/core';
import netlifyPhoto from '../../assets/netlify-rectangle.png';
import { motion } from 'motion/react';
import ModalImage from './ModalImage';

function DeliveryAppModal() {
  const items = [
    'Sample app I created',
    'Writted in React, Typescript',
    'Deployed on Netlify',
  ];

  return (
    <>
      <ModalImage img={netlifyPhoto} />
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
                Sample Delivery App |{' '}
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

export default DeliveryAppModal;

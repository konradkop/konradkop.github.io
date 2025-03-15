import {
  Text,
  Title,
  List,
  ThemeIcon,
  Grid,
  Image,
  Flex,
  Anchor,
} from '@mantine/core';
import SwellPhoto from '../../assets/swell-rectangle.gif';
import { motion } from 'motion/react';

function SwellModal() {
  const items = [
    'Contributed to an electron-based desktop application using Node and React/Redux, allowing users to send client-side requests using REST, GraphQL, WebSocket, and WebRTC for endpoint testing.',
    'Created custom React hooks to improve site responsiveness and logic, and used Redux to consolidate state management, allowing for globally-scoped state access.',
    'Created binary data testing for WebSocket protocol, enabling users to send blobs such as images, export logs, create Chai assertions with Mocha on their requests, and create a custom WebSocket development server for testing.',
    'React/Redux, Mocha, and Chai tests were added primarily to give the client a more well-defined testing suite. Image limits are based on the client’s own server, which allows them to more accurately assess the user experience.',
    'Added test code snippets to client-side requests, allowing clients to test their servers. Users can write their own tests within a NodeVM environment and/or use the predefined snippet. Assertion tests are written in Chai/Mocha.',
  ];

  return (
    <>
      <Image radius="md" h={200} src={SwellPhoto} />
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
                  href="https://github.com/open-source-labs/Swell"
                  target="_blank"
                  size="lg"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Swell
                </Anchor>{' '}
                | Open Source Developer
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text size="sm" color="gray">
                2021
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

export default SwellModal;

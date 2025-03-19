import { Title, Grid, Flex, Text, Space } from '@mantine/core';
import konradSki from '../../assets/konrad-ski.jpg';
import { motion } from 'motion/react';
import ModalImage from './ModalImage';
import feather from 'feather-icons';
import { useEffect } from 'react';

function KonradModal() {
  const items = [
    "Hello, I'm Konrad. I’m currently doing my master’s at Cornell, and I have worked in healthtech previously. I'm currently looking for an internship.",

    'At Cornell, I am primarily working with Python, although I have also had exposure to R when working with large swathes of medical data. Most of my assignments are machine learning-focused, however, I have also had my fair share of UI/UX projects using Figma and other programs.',

    'My work has generally been in React, but I enjoy working across the full stack. I’m familiar with the startup space, and have had to wear many hats during my tenure. From developing front-end web pages to integrating 3rd party systems on the backend, I have a good amount of experience with the development life cycle.',

    'I worked on a React Native to mobile app conversion, focusing on deep-link and page integrity among others, with the app being successfully launched on the App and Play store. On the backend side, I’ve done work with payment logic (Stripe) as well as email (AWS).',

    "Having worked as a data analyst, I'm familiar with handling and interpreting big data (GPQ, AWS, Alteryx). My tenures at a financial institution, as well as a healthtech-based startup, have versed me in the management of large amounts of sensitive (PHI, PII) customer data. I also have experience in onboarding new hires, conducting interviews, and communicating with product stakeholders. But please take a look at my resume for a more in-depth breakdown of my experience.",

    "Beyond my technical expertise, I have managed outreach efforts for my community through my AmeriCorps service with Sun River Health. This gave me a firsthand appreciation for technology's role in improving lives.",

    "I'm available most weekdays if that works for you.",
  ];

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <ModalImage img={konradSki} />
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
                Me | Software Engineer | NYC
              </Title>
            </motion.div>
          </Flex>

          <Text
            size="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple', deg: 90 }}
            ta="center"
            fw={700}
            w={'100%'}
          >
            {items[0]}
          </Text>

          <Space h="lg" p={20} />

          <Text fw={500}>
            <i data-feather="cpu" style={{ marginRight: '8px' }} />
            {items[1]}
          </Text>
          <Space h="lg" p={10} />

          <Text w={'100%'} fw={500}>
            <i data-feather="layers" style={{ marginRight: '8px' }} />
            {items[2]}
          </Text>
          <Space h="lg" p={10} />

          <Text w={'100%'} fw={500}>
            <i data-feather="smartphone" style={{ marginRight: '8px' }} />
            {items[3]}
          </Text>
          <Space h="lg" p={10} />

          <Text w={'100%'} fw={500}>
            <i data-feather="database" style={{ marginRight: '8px' }} />
            {items[4]}
          </Text>
          <Space h="lg" p={10} />

          <Text w={'100%'} fw={500}>
            <i data-feather="heart" style={{ marginRight: '8px' }} />
            {items[5]}
          </Text>
          <Space h="lg" p={10} />

          <Text ta="center" w={'100%'} fw={500}>
            <i data-feather="calendar" style={{ marginRight: '8px' }} />
            {items[6]}
          </Text>
        </Grid>
      </div>
    </>
  );
}

export default KonradModal;

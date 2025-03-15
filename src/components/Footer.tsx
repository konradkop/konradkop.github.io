import { Box, Text, Group, Anchor, Flex, Space } from '@mantine/core';
import { useEffect } from 'react';
import ImageComponent from './ImageComponent';
import konradPhoto from '../assets/konradPhoto.jpg'; // Import the image
import feather from 'feather-icons';
import konradResume from '../assets/Konrad-resume.pdf';
function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Box
      style={{
        padding: 'var(--mantine-spacing-md)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 200,
        backgroundColor: '#87CEEB',
      }}
    >
      <Flex justify="space-around" align="center" gap="xl">
        <Group>
          <ImageComponent photo={konradPhoto} />
          <Space w="md" />
          <Flex direction="column" align="center">
            <Text size="xl" color="white">
              Konrad Kopko
            </Text>
            <Text size="sm" color="white">
              Software Engineer
            </Text>
          </Flex>
        </Group>
        <Group>
          <Anchor
            href={konradResume}
            size="md"
            variant="gradient"
            gradient={{ from: 'white', to: 'white' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{ __html: feather.icons.file.toSvg() }}
              style={{ color: 'white' }}
            />{' '}
            Resume
          </Anchor>
          <Anchor
            href="https://github.com/konradkop"
            size="md"
            variant="gradient"
            gradient={{ from: 'white', to: 'white' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{ __html: feather.icons.github.toSvg() }}
              style={{ color: 'white' }}
            />{' '}
            GitHub
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/konradkopko/"
            size="md"
            variant="gradient"
            gradient={{ from: 'white', to: 'white' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: feather.icons.linkedin.toSvg(),
              }}
              style={{ color: 'white' }}
            />{' '}
            LinkedIn
          </Anchor>
        </Group>
      </Flex>
    </Box>
  );
}

export default Footer;

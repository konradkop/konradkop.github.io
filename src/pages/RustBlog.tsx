import React from 'react';
import {
  Card,
  Text,
  Stack,
  Flex,
  Space,
  Badge,
  Anchor,
} from '@mantine/core';
import rustCrabNormal from '../assets/rust-crab-normal.png'; 
import rustCrabHappy from '../assets/rust-crab-happy.png'; 
import rustCrabGesture from '../assets/rust-crab-gesture.png'; 
import { Link } from 'react-router-dom';
import posts from '../rust-blog/data/rustPosts'

const styles: Record<string, React.CSSProperties> = {
  flexStyle: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
  },

  textStyle: {
    textAlign: 'left',
  },
};

export default function   RustBlog() {
const crabImages = {
  normal: rustCrabNormal,
  happy: rustCrabHappy,
  gesture: rustCrabGesture,
};

    const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <Flex
      style={{
        ...styles.flexStyle,
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Text style={styles.textStyle}>
        Documenting my journey with Rust.
      </Text>

      <Space h="md" />

      <Stack w="100%" gap="md">
        {sortedPosts.map((post) => (
        <Card
        key={post.id}
        shadow="sm"
        radius="md"
        padding="md"
        withBorder
        style={{
            width: '90%',
            backgroundColor: 'rgba(255, 0, 0, 0.05)',
            borderColor: 'rgba(255, 0, 0, 0.2)',
            borderLeft: '4px solid #ff4d4d',

            backgroundImage: `url(${crabImages[post.crabType]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '120px',
            backgroundPosition: 'right 15px bottom 15px',
        }}
        >
            <Stack gap="xs">

              <Text fw={600} size="lg">
                {post.title}
              </Text>

              <Stack gap={2}>
                {post.blurb.map((line, idx) => (
                  <Text key={idx} size="sm" c="dimmed" ta="left">
                    {line}
                  </Text>
                ))}
                
              </Stack>

              {post.link && (
              <Anchor
                component={Link}
                to={post.link}
                c="#D9480F"
                fw={500}
                underline="hover"
              >
                Read →
              </Anchor>
              )}
            </Stack>
                <Badge color="#D9480F" variant="light" w="fit-content">
                {post.date}
              </Badge>
          </Card>
        ))}
      </Stack>

      <Space h="md" />
    </Flex>
  );
}
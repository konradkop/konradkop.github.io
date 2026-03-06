import { useParams, useNavigate } from "react-router-dom";
import { Container, Title, Text, Stack, Button, Flex } from "@mantine/core";
import rustPosts from "./data/rustPosts";
import { colors } from "../styles";
import { Rust } from "./data/reusedComponents";

interface RustPostPageProps {
  setView: (view: 'home' | 'rust') => void; // accept setView from parent
}

export default function RustPostPage({ setView }: RustPostPageProps) {
  const fontFamily = 'monospace, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif';
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = rustPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container size="sm">
        <Title order={2}>Post not found</Title>
        <Text>This Rust blog post does not exist.</Text>
      </Container>
    );
  }

  const PostComponent = post.component;

  const handleBack = () => {
    setView('rust');      
    navigate('/');    
  };

  return (
    <Container size="sm" py="xl" style={{ fontFamily }}>
      <Stack gap="md">
        <Flex 
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'lg', sm: 'lg' }}
        justify="space-between"
        >
          <Button variant="outline" color={colors.rustColor} onClick={handleBack}>
            ←
          </Button> 
          <Text style={{color: colors.rustColor}}>
            {post.date}
          </Text>
        </Flex>
        <Title order={1}>{<Rust>{post.title}</Rust>}</Title>
        <PostComponent />
      </Stack>
    </Container>
  );
}
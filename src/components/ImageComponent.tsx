import { Image, Box } from '@mantine/core';

interface ImageComponentProps {
  photo: string; // Define the prop type
}

function ImageComponent({ photo }: ImageComponentProps) {
  return (
    <Box style={{ maxWidth: '100px' }}>
      <Image
        src={photo} 
        alt="Konrad's photo"
        radius="md" 
        fit="contain" 
        style={{ width: '50px', height: '48px' }}
      />
    </Box>
  );
}

export default ImageComponent;

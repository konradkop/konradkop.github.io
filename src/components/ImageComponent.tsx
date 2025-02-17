import { Image, Box } from '@mantine/core';

interface ImageComponentProps {
  photo: string; // Define the prop type
}

function ImageComponent({ photo }: ImageComponentProps) {
  return (
    <Box style={{ maxWidth: '100px' }}>
      <Image
        src={photo} // Use the imported image
        alt="Konrad's photo"
        radius="md" // Optional: Adds rounded corners
        fit="contain" // Optional: Controls how the image fits within the container
      />
    </Box>
  );
}

export default ImageComponent;

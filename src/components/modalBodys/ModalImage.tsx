import { useViewportSize } from '@mantine/hooks';
import { Image } from '@mantine/core';

interface ImageModalProps {
  img: string;
}

export default function ModalImage({ img }: ImageModalProps) {
  const { width: viewportWidth } = useViewportSize();
  const dynamicHeight = Math.min(0.5 * viewportWidth, 500); // Cap at 500px if needed

  return (
    <Image
      p="10"
      radius="md"
      h={dynamicHeight}
      fit="contain"
      src={img}
      style={{ padding: 'auto' }}
    />
  );
}

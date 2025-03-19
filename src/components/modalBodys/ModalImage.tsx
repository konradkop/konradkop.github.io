import { Image } from '@mantine/core';

interface ImageModalProps {
  img: string;
}

export default function ModalImage({ img }: ImageModalProps) {
  return (
    <Image
      radius="md"
      h={200}
      fit="contain"
      src={img}
      style={{ padding: 'auto' }}
    />
  );
}

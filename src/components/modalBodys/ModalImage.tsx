import { useViewportSize } from '@mantine/hooks';
import { Image } from '@mantine/core';

interface ImageModalProps {
  img: string;
  maxHeight?: number;
}

export default function ModalImage({ img, maxHeight }: ImageModalProps) {
  const { width: viewportWidth } = useViewportSize();
  const dynamicHeight = Math.min(0.5 * viewportWidth, 500); // Cap at 500px if needed

  const commonProps = {
    p: 10,
    h: dynamicHeight,
    fit: 'contain' as const,
    src: img,
    style: { padding: 'auto' },
  };

  if (maxHeight) {
    return <Image {...commonProps} mah={maxHeight} />;
  }

  return <Image {...commonProps} />;
}

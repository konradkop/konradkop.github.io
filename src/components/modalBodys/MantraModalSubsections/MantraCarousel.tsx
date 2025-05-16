import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import mantraPhoto from '../../../assets/mantra-rectangle.png';
import mantra1 from '../../../assets/mantra1.png';
import mantra2 from '../../../assets/mantra2.png';
import '@mantine/carousel/styles.css';

function MantraImageCarousel() {
  const images = [mantra1, mantra2, mantraPhoto];

  return (
    <Carousel
      slideSize="100%"
      height={600}
      slideGap="lg"
      controlsOffset="xs"
      draggable
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: 'center',
      }}
    >
      {images.map((src, index) => (
        <Carousel.Slide key={index}>
          <Image src={src} alt={`Slide ${index}`} fit="contain" height={600} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default MantraImageCarousel;

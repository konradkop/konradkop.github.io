import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import americorpsPhoto from '../../../assets/americorps-rectangle.png';
import americorps1 from '../../../assets/americorps1.jpg';
import americorps2 from '../../../assets/americorps2.jpg';
import americorps3 from '../../../assets/americorps3.jpg';
import '@mantine/carousel/styles.css';

function AmericorpsImageCarousel() {
  const images = [americorps2, americorps1, americorps3, americorpsPhoto];

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

export default AmericorpsImageCarousel;

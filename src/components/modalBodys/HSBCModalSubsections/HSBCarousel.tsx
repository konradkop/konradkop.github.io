import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import hsbcPhoto from '../../../assets/hsbc-rectangle.png';
import hsbcBuilding from '../../../assets/hsbcBuilding.jpg';
import hsbc2 from '../../../assets/hsbc2.png';
import '@mantine/carousel/styles.css';

function HSBCImageCarousel() {
  const images = [hsbcPhoto, hsbc2, hsbcBuilding];

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

export default HSBCImageCarousel;

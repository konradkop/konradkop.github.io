import { Flex } from '@mantine/core';
import HeroSection from './HSBCModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import HSBCImageCarousel from './HSBCModalSubsections/HSBCarousel';
import ModalImage from './ModalImage';
import hsbcPhoto from '../../assets/hsbc-rectangle.png';

function HSBCModal() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  return (
    <div
      style={{
        background: colors.lightRed,
        color: 'black',
        borderRadius: '8px',
        height: '100%',
      }}
    >
      {isMobile && (
        <Flex direction={'column'} align="center" style={{ width: '100%' }}>
          <ModalImage img={hsbcPhoto} />
          <Flex>
            <HeroSection />
          </Flex>
        </Flex>
      )}

      {!isMobile && (
        <Flex direction={'row'} align="center" style={{ width: '100%' }}>
          <Flex>
            <HeroSection />
          </Flex>
          <Flex style={{ width: '50%', height: '100%' }}>
            <HSBCImageCarousel />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default HSBCModal;

import { Flex } from '@mantine/core';
import HeroSection from './AmericorpsModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import AmericorpsImageCarousel from './AmericorpsModalSubsections/AmericorpsCarousel';
import ModalImage from './ModalImage';
import americorpsPhoto from '../../assets/americorps-rectangle.png';

function AmericorpsModal() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  return (
    <div
      style={{
        background: colors.background,
        color: 'black',
        borderRadius: '8px',
        height: '100%',
      }}
    >
      {isMobile && (
        <Flex direction={'column'} align="center" style={{ width: '100%' }}>
          <ModalImage img={americorpsPhoto} />
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
            <AmericorpsImageCarousel />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default AmericorpsModal;

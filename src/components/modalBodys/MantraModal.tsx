import { Flex } from '@mantine/core';
import HeroSection from './MantraModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import MantraImageCarousel from './MantraModalSubsections/MantraCarousel';
import ModalImage from './ModalImage';
import mantraPhoto from '../../assets/mantra-rectangle.png';

function MantraModal() {
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
          <ModalImage img={mantraPhoto} />
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
            <MantraImageCarousel />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default MantraModal;

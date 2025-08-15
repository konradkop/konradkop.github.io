import { Flex } from '@mantine/core';
import HeroSection from './AcxiomModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import ModalImage from './ModalImage';
import AcxiomLogoPhoto from '../../assets/acxiom-logo.png';

function AcxiomModal() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  return (
    <div
      style={{
        background: colors.black,
        color: 'black',
        borderRadius: '8px',
        height: '100%',
      }}
    >
      {isMobile && (
        <Flex direction={'column'} align="center" style={{ width: '100%' }}>
          <ModalImage img={AcxiomLogoPhoto} />
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
            <ModalImage img={AcxiomLogoPhoto} />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default AcxiomModal;

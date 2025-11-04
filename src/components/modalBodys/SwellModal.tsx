import { Flex } from '@mantine/core';
import HeroSection from './SwellModalSubsections/HeroSection';
import { colors } from '../../styles';
import ModalImage from './ModalImage';
import SwellPhoto from '../../assets/swell-rectangle.gif';

function SwellModal() {
  return (
    <div
      style={{
        background: 'white',
        color: 'black',
        borderRadius: '8px',
        backgroundColor: colors.background,
      }}
    >
      <Flex direction={'column'} align="center" style={{ width: '100%' }}>
        <ModalImage img={SwellPhoto} />
        <HeroSection />
      </Flex>
    </div>
  );
}

export default SwellModal;

import { Flex } from '@mantine/core';
import HeroSection from './AcxiomModalSubsections/HeroSection';
import { colors } from '../../styles';

function AcxiomModal() {
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
        <HeroSection />
      </Flex>
    </div>
  );
}

export default AcxiomModal;

import { Flex } from '@mantine/core';
import HeroSection from './BaruchModalSubsections/HeroSection';
import { colors } from '../../styles';

function BaruchModal() {
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

export default BaruchModal;

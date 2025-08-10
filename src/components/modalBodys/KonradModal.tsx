import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import HeroSection from './KonradModalSubsections/HeroSection';
import { colors } from '../../styles';

interface KonradModalProps {
  close: () => void;
}

function KonradModal({ close }: KonradModalProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <div
      style={{
        background: 'white',
        color: 'black',
        borderRadius: '8px',
        backgroundColor: colors.background,
      }}
    >
      {isMobile && (
        <Flex direction={'column'} align="center" style={{ gap: 20 }}>
          <HeroSection close={close} />
        </Flex>
      )}
      {!isMobile && (
        <Flex
          direction={'row'}
          align="center"
          justify="center"
          style={{ width: '100%' }}
        >
          <HeroSection close={close} />
        </Flex>
      )}
    </div>
  );
}

export default KonradModal;

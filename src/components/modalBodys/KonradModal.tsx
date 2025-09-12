import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import HeroSection from './KonradModalSubsections/HeroSection';
import { colors } from '../../styles';

interface KonradModalProps {
  close: () => void;
  motionEnabled: boolean;
  setMotionEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function KonradModal({
  close,
  motionEnabled,
  setMotionEnabled,
}: KonradModalProps) {
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
        <Flex direction={'column'} align="center">
          <HeroSection
            close={close}
            motionEnabled={motionEnabled}
            setMotionEnabled={setMotionEnabled}
          />
        </Flex>
      )}
      {!isMobile && (
        <Flex
          direction={'row'}
          align="center"
          justify="center"
          style={{ width: '100%' }}
        >
          <HeroSection
            close={close}
            motionEnabled={motionEnabled}
            setMotionEnabled={setMotionEnabled}
          />
        </Flex>
      )}
    </div>
  );
}

export default KonradModal;

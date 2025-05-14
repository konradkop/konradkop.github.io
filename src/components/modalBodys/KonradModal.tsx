import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import konradSki from '../../assets/konrad-ski.jpg';
import ModalImage from './ModalImage';
import HeroSection from './KonradModalSubsections/HeroSection';
import { colors } from '../../styles';

interface KonradModalProps {
  close: () => void;
}

function KonradModal({ close }: KonradModalProps) {
  const isMobile = useMediaQuery('(max-width: 90em)');

  return (
    <div
      style={{
        background: 'white',
        color: 'black',
        borderRadius: '8px',
        backgroundColor: colors.background,
      }}
    >
      <Flex direction={'row'} align="center" style={{ width: '100%' }}>
        <Flex>
          <HeroSection close={close} />
        </Flex>
        {!isMobile && (
          <Flex>
            <ModalImage img={konradSki} />
          </Flex>
        )}
      </Flex>
    </div>
  );
}

export default KonradModal;

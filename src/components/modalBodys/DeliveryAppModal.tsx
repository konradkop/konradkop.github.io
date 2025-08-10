import { Flex } from '@mantine/core';
import HeroSection from './DeliveryAppModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import ModalImage from './ModalImage';
import deliveryAppPhoto from '../../assets/delivery-app.png';

function DeliveryAppModal() {
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
          <ModalImage img={deliveryAppPhoto} />
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
            <ModalImage img={deliveryAppPhoto} />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default DeliveryAppModal;

import { Flex } from '@mantine/core';
import HeroSection from './DeliveryAppModalSubsections/HeroSection';
import { colors } from '../../styles';
import ModalImage from './ModalImage';
import deliveryAppPhoto from '../../assets/delivery-app.png';

function DeliveryAppModal() {
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
        <ModalImage img={deliveryAppPhoto} />
        <HeroSection />
      </Flex>
    </div>
  );
}

export default DeliveryAppModal;

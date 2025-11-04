import { useMediaQuery } from '@mantine/hooks';
import MantraModal from './modalBodys/MantraModal';
import HSBCModal from './modalBodys/HSBCModal';
import AmericorpsModal from './modalBodys/AmericorpsModal';
import CornellModal from './modalBodys/CornellModal';
import BaruchModal from './modalBodys/BaruchModal';
import SwellModal from './modalBodys/SwellModal';
import KonradModal from './modalBodys/KonradModal';
import DeliveryAppModal from './modalBodys/DeliveryAppModal';
import AcxiomModal from './modalBodys/AcxiomModal';
import PAMLModal from './modalBodys/PAMLModal';
import { Drawer } from '@mantine/core';
import { colors } from '../styles';
import circuitBoard from '../assets/circuitboard.gif';

interface ResumeDrawerProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  currLabel: string;
  motionEnabled: boolean;
  setMotionEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResumeDrawer({
  opened,
  close,
  currLabel,
  motionEnabled,
  setMotionEnabled,
}: ResumeDrawerProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        padding={isMobile ? 10 : 50}
        size={isMobile ? '100%' : '50%'}
        overlayProps={{ blur: 0, opacity: 0.3 }}
        withCloseButton={isMobile}
        styles={{
          content: {
            backgroundImage: `url(${circuitBoard})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundColor: colors.black,
            borderRight: '1px solid purple',
            boxShadow: '0 0 30px rgba(253, 0, 219, 0.6)',
          },
        }}
      >
        {currLabel === 'Mantra' && <MantraModal />}
        {currLabel === 'HSBC' && <HSBCModal />}
        {currLabel === 'Americorps' && <AmericorpsModal />}
        {currLabel === 'Cornell' && <CornellModal />}
        {currLabel === 'Baruch' && <BaruchModal />}
        {currLabel === 'Swell' && <SwellModal />}
        {currLabel === 'Konrad' && (
          <KonradModal
            close={close}
            motionEnabled={motionEnabled}
            setMotionEnabled={setMotionEnabled}
          />
        )}
        {currLabel === 'DeliveryApp' && <DeliveryAppModal />}
        {currLabel === 'Acxiom' && <AcxiomModal />}
        {currLabel === 'PAML' && <PAMLModal />}
      </Drawer>
    </>
  );
}

export default ResumeDrawer;

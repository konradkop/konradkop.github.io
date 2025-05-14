import { useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import MantraModal from './modalBodys/MantraModal';
import HSBCModal from './modalBodys/HSBCModal';
import AmericorpsModal from './modalBodys/AmericorpsModal';
import CornellModal from './modalBodys/CornellModal';
import BaruchModal from './modalBodys/BaruchModal';
import SwellModal from './modalBodys/SwellModal';
import KonradModal from './modalBodys/KonradModal';
import DeliveryAppModal from './modalBodys/DeliveryAppModal';
import { useViewportSize } from '@mantine/hooks';

interface ResumeModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  currLabel: string;
}

function ResumeModal({ opened, close, currLabel }: ResumeModalProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');
  const { height } = useViewportSize();
  const width = window.innerWidth;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        padding={isMobile ? 10 : 50}
        withCloseButton={isMobile ? true : false}
        fullScreen={isMobile}
        transitionProps={{ transition: 'slide-down', duration: 400 }}
        overlayProps={{ backgroundOpacity: 0.3, blur: 0 }}
        size={width}
        styles={{
          title: { fontWeight: 600 },
          body: {
            height: isMobile ? height - 75 : height - 200,
            overflowY: 'auto',
          },
        }}
      >
        {currLabel === 'Mantra' && <MantraModal />}
        {currLabel === 'HSBC' && <HSBCModal />}
        {currLabel === 'Americorps' && <AmericorpsModal />}
        {currLabel === 'Cornell' && <CornellModal />}
        {currLabel === 'Baruch' && <BaruchModal />}
        {currLabel === 'Swell' && <SwellModal />}
        {currLabel === 'Konrad' && <KonradModal close={close} />}
        {currLabel === 'DeliveryApp' && <DeliveryAppModal />}
      </Modal>
    </>
  );
}

export default ResumeModal;

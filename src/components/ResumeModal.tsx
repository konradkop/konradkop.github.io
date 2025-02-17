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

interface ResumeModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  currLabel: string;
}

function ResumeModal({ opened, close, currLabel }: ResumeModalProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        padding={30}
        withCloseButton={isMobile ? true : false}
        fullScreen={isMobile}
        transitionProps={{ transition: 'rotate-left', duration: 400 }}
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        size={'55rem'}
        styles={{ title: { fontWeight: 600 } }}
      >
        {currLabel === 'Mantra' && <MantraModal />}
        {currLabel === 'HSBC' && <HSBCModal />}
        {currLabel === 'Americorps' && <AmericorpsModal />}
        {currLabel === 'Cornell' && <CornellModal />}
        {currLabel === 'Baruch' && <BaruchModal />}
        {currLabel === 'Swell' && <SwellModal />}
        {currLabel === 'Konrad' && <KonradModal />}
        {currLabel === 'DeliveryApp' && <DeliveryAppModal />}
      </Modal>
    </>
  );
}

export default ResumeModal;

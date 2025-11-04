import { Flex } from '@mantine/core';
import HeroSection from './PAMLModalSubsections/HeroSection';
import { colors } from '../../styles';
import PAMLreport from '../../assets/paml-final-report.pdf';
import PdfScroll from './PDFScroll';

function PAMLModal() {
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
        <PdfScroll pdfUrl={PAMLreport} />
        <HeroSection />
      </Flex>
    </div>
  );
}

export default PAMLModal;

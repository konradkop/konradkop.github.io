import { Flex } from '@mantine/core';
import HeroSection from './PAMLModalSubsections/HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { colors } from '../../styles';
import PAMLreport from '../../assets/paml-final-report.pdf';
import PdfScroll from './PDFScroll';

function PAMLModal() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  return (
    <div
      style={{
        background: colors.background,
        color: 'black',
        borderRadius: '8px',
        height: '100%',
      }}
    >
      {isMobile && (
        <Flex direction={'column'} align="center" style={{ width: '100%' }}>
          <PdfScroll pdfUrl={PAMLreport} />
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
            <PdfScroll pdfUrl={PAMLreport} />
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default PAMLModal;

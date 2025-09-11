import { Box } from '@mantine/core';

interface PDFModalProps {
  pdfUrl: string;
}

function PdfScroll({ pdfUrl }: PDFModalProps) {
  return (
    <Box style={{ height: '60vh', width: '100%', border: '1px solid #ccc' }}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </Box>
  );
}

export default PdfScroll;

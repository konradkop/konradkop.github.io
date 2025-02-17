import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Ball from './pages/Ball';
import ResumeModal from './components/ResumeModal';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import labelsObj from './BallLabels';
import Footer from './components/Footer';

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  const [currLabel, setCurrLabel] = useState<string>(labelsObj.konrad.name);

  return (
    <MantineProvider>
      <ResumeModal
        opened={opened}
        open={open}
        close={close}
        currLabel={currLabel}
      />
      <Ball open={open} labelsObj={labelsObj} setCurrLabel={setCurrLabel} />
      <Footer />
    </MantineProvider>
  );
}

export default App;

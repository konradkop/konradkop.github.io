import { Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Ball from './pages/Ball';
import ResumeModal from './components/ResumeDrawer';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import labelsObj from './BallLabels';
import Footer from './components/Footer';
import KonradPage from './pages/KonradPage';
import RustPostPage from './rust-blog/RustPostPage'

export type View = 'home' | 'projects' | 'rust';

function App() {
  const [opened, { open, close }] = useDisclosure(true);
  const [currLabel, setCurrLabel] = useState<string>(labelsObj.konrad.name);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [fun, setFun] = useState<boolean>(false);


  const [view, setView] = useState<View>('home');


  return (
    <MantineProvider >
        <Routes>
          <Route path="/rust/:slug" element={<RustPostPage setView={setView}/>} />
          <Route path="/" element={
            fun ? (
            <>
              <ResumeModal
                opened={opened}
                open={open}
                close={close}
                currLabel={currLabel}
                motionEnabled={motionEnabled}
                setMotionEnabled={setMotionEnabled}
              />

              <Ball open={open} labelsObj={labelsObj} setCurrLabel={setCurrLabel} />

              <Footer />
            </>
          ) : (
            <KonradPage setFun={setFun} setView={setView} view={view}/>
          )
          } />
        </Routes>
    </MantineProvider>
  );
}

export default App;
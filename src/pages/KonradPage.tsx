import { Container, Text, Title, Anchor, Stack } from '@mantine/core';
import React from 'react';
import konradResume from '../assets/Konrad-resume.pdf';
import KonradProjects from './KonradProjects';
import KonradBlurb from './KonradBlurb';
import RustBlog from './RustBlog';
import type {View} from '../App'

const styles: Record<string, React.CSSProperties> = {
  pageContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '40px',
    display: 'block',
    fontFamily:
      'monospace, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  glitch: {
    position: 'relative',
    display: 'inline-block',
  },

  red: {
    textShadow: '-2px 0 red',
  },

  blue: {
    textShadow: '-2px 0 blue',
  },

  rust: {
    color: '#D9480F'
  }
};

interface KonradPageProps {
  setFun: React.Dispatch<React.SetStateAction<boolean>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
  view: string;
}


export default function KonradPage({ setFun, setView , view}: KonradPageProps) {

  return (
    <Container size="lg" py="xl" style={styles.pageContainer}>
      <Stack style={{ width: '100%' }}>
        <div>
          <Title
            order={1}
            data-text="Konrad Kopko"
            style={{ ...styles.glitch, fontSize: '2.5rem' }}
          >
            Konrad Kopko
            <span
              aria-hidden="true"
              style={{
                ...styles.red,
                position: 'absolute',
                top: -2,
                left: 0,
              }}
            >
              Konrad Kopko
            </span>
            <span
              aria-hidden="true"
              style={{
                ...styles.blue,
                position: 'absolute',
                top: 2,
                left: 0,
              }}
            >
              Konrad Kopko
            </span>
          </Title>

          <Text size="sm" mt="xs">
            [
            <Anchor onClick={() => setView('home')} mx={4}>
              home
            </Anchor>
            ] [
            <Anchor href={konradResume} mx={4}>
              resume
            </Anchor>
            ] [
            <Anchor href="https://github.com/konradkop" mx={4}>
              github
            </Anchor>
            ] [
            <Anchor onClick={() => setView('projects')} mx={4}>
              projects
            </Anchor>
            ] 
              [
              <Anchor onClick={() => setView('rust')}  mx={4} style={{
                  ...styles.rust,
                }}>
                rust blog
              </Anchor>
              ]
            [
            <Anchor href="https://53d8b2b1.fishattack.pages.dev" mx={4} >
              🐟
            </Anchor>
            ]
          </Text>
        </div>

        {view === 'home' && <KonradBlurb setFun={setFun} />}
        {view === 'projects' && <KonradProjects />}
        {view === 'rust' && <RustBlog />}
      </Stack>
    </Container>
  );
}

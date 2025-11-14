import { Container, Text, Title, Anchor, Stack } from '@mantine/core';
import React, { useState } from 'react';
import konradResume from '../assets/Konrad-resume.pdf';
import KonradProjects from './KonradProjects';
import KonradBlurb from './KonradBlurb';
// ---- STYLES ----

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
};

interface KonradPageProps {
  setFun: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function KonradPage({ setFun }: KonradPageProps) {
  const [showProjects, setShowProjects] = useState<boolean>(false);

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
            <Anchor onClick={() => setShowProjects(false)} mx={4}>
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
            <Anchor onClick={() => setShowProjects(true)} mx={4}>
              projects
            </Anchor>
            ]
          </Text>
        </div>

        {showProjects ? <KonradProjects /> : <KonradBlurb setFun={setFun} />}
      </Stack>
    </Container>
  );
}

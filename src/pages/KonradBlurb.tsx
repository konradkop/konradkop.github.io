import { Text, Anchor, Space, Flex, Stack, Grid } from '@mantine/core';
import ModalImage from '../components/modalBodys/ModalImage';
import retroFuture from '../assets/retroFuture.jpg';

const styles: Record<string, React.CSSProperties> = {
  flexStyle: {
    flexDirection: 'column',
    display: 'flex',
  },

  textStyle: {
    textAlign: 'left',
  },
  canvasWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  canvas: { borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' },
};

interface KonradBlurb {
  setFun: React.Dispatch<React.SetStateAction<boolean>>;
}

export const KonradProjects: React.FC<KonradBlurb> = ({
  setFun,
}: KonradBlurb) => {
  return (
    <Grid gutter="xl" align="center">
      <Grid.Col span={{ base: 12, md: 5 }}>
        <Stack gap="sm">
          <Flex style={styles.flexStyle}>
            <Text style={styles.textStyle}>Hello!</Text>
            <Space h="md" />

            <Text style={styles.textStyle}>
              I am a software engineer and machine-learning enthusiaist,
              building systems across health-tech, cloud platforms, and
              data-driven infrastructure. I’ve worked on everything from secure
              full-stack applications supporting hundreds of thousands of
              students at Mantra, to SQL-heavy analytics pipelines at HSBC, to
              outreach and community technology work with AmeriCorps.
            </Text>

            <Space h="md" />

            <Text style={styles.textStyle}>
              You&apos;ll most likely find me building apps in TypeScript,
              experimenting with Azure, deploying on the App Store, or wiring
              together another side project that probably involves React,
              Pytorch and Node.
            </Text>

            <Space h="md" />

            <Text>Thank you.</Text>
            <Text size="sm" mt="xs">
              [
              <Anchor mx={4} onClick={() => setFun(true)}>
                This website is too boring
              </Anchor>
              ]
            </Text>
          </Flex>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 7 }}>
        <div style={styles.canvasWrapper}>
          <div style={styles.canvas}>
            <ModalImage img={retroFuture} />
          </div>
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default KonradProjects;

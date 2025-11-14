import React from 'react';
import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Anchor,
  Flex,
  Space,
} from '@mantine/core';

interface Project {
  id: number;
  title: string;
  job: string; // new field
  description: string[];
  technologies: string[];
  link?: string;
}

const styles: Record<string, React.CSSProperties> = {
  flexStyle: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
  },

  textStyle: {
    textAlign: 'left',
  },
};

const KonradProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Agentic AI Mental Health Assistant',
      job: 'Software Engineer',
      description: [
        'Building an agentic AI model that provides emotional support using physiological + behavioral data',
        'Integrates sleeping habits, physical activity, and heart rate from Apple HealthKit & Android Health',
        'Full-stack system assembled with FastAPI backend, React Native frontend, and Azure infrastructure',
      ],
      technologies: [
        'FastAPI',
        'React Native',
        'Azure',
        'Apple HealthKit',
        'Android Health',
        'Generative AI',
      ],
      link: 'https://pac.cs.cornell.edu',
    },

    {
      id: 2,
      title: 'Mantra Health Teletherapy Platform',
      job: 'Software Engineer',
      description: [
        'Maintained 99% uptime for a full-stack mental-health platform used by 110 campuses and 800K+ students',
        'Built Node.js/TypeScript microservices, GraphQL APIs, and React features for therapists + students',
        'Shipped mobile deep-linking; app achieved 5/5 rating and 300+ downloads at release',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'React',
        'GraphQL',
        'AWS',
        'PostgreSQL',
        'TypeORM',
      ],
      link: 'https://mantrahealth.com/',
    },

    {
      id: 3,
      title: 'Skin Cancer Classification App',
      job: 'Data Scientist',
      description: [
        'Deployed a Streamlit app that identifies skin cancer with ~80% accuracy',
        'Accepts user-uploaded images and classifies lesion types using a CNN',
        'Built for accessibility and rapid feedback for non-clinical users',
      ],
      technologies: ['Python', 'Streamlit', 'TensorFlow', 'Computer Vision'],
      link: 'https://skin-app-app-72wktsrcdywlf35otqbxhm.streamlit.app',
    },

    {
      id: 4,
      title: 'Mental Health Prediction Model',
      job: 'Data Scientist',
      description: [
        'Developed ML models predicting likelihood of depression using context-aware data',
        'Integrated fitness, sleep, and behavioral data patterns into Bayesian/ML pipelines',
        'Iterated models to improve generalization on student wellbeing datasets',
      ],
      technologies: ['Python', 'Pytorch', 'Pandas', 'ML Ops'],
      link: 'https://paml-mental-health-project.streamlit.app',
    },

    {
      id: 5,
      title: 'Acxiom Healthcare Analytics',
      job: 'Health Analytics Engineer',
      description: [
        'Refined predictive models targeting biotech & healthcare consumers',
        'Built optimized Snowflake SQL pipelines processing millions of HIPAA-protected records',
        'Supported a team generating 46.2% YTD revenue growth by improving the Audience Quality Index',
      ],
      technologies: [
        'Snowflake',
        'SQL',
        'Python',
        'Healthcare Data',
        'ICD-10',
        'NDC',
        'HCPC',
      ],
      link: 'https://www.acxiom.com/',
    },

    {
      id: 6,
      title: 'HSBC Data Automation & Analytics',
      job: 'Financial Analyst',
      description: [
        'Created a Node.js/Puppeteer script that recovered 100+ work hours by automating document parsing',
        'Produced SQL-driven dashboards translating analytics into insights for 2K clients',
        'Consolidated millions of records into unified reporting layers for the insights team',
      ],
      technologies: ['Node.js', 'Puppeteer', 'SQL', 'VBA', 'Data Engineering'],
      link: 'https://www.hsbc.com/',
    },

    {
      id: 7,
      title: 'Swell API Testing Desktop App',
      job: 'Software Engineer',
      description: [
        'Contributed to an Electron-based desktop app for client-side API testing',
        'Enabled users to send and inspect REST, GraphQL, WebSocket, and WebRTC requests',
        'Enhanced developer productivity by streamlining debugging workflows',
      ],
      technologies: ['Electron', 'Node.js', 'React', 'Redux', 'API Testing'],
      link: 'https://github.com/oslabs-beta/Swell',
    },
  ];

  return (
    <Flex
      style={{
        ...styles.flexStyle,
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Text style={styles.textStyle}>
        Here are some of my projects/work experience:
      </Text>

      <Space h="md" />

      <Stack w="100%" gap="md">
        {projects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            radius="md"
            padding="md"
            withBorder
            style={{ width: '90%' }}
          >
            <Stack gap="xs">
              <Text fw={600} size="lg">
                {project.title}
              </Text>
              <Text size="sm" c="dimmed" fw={500}>
                {project.job}
              </Text>

              <Stack gap={2}>
                {project.description.map((line, idx) => (
                  <Text key={idx} size="sm" c="dimmed" ta="left">
                    • {line}
                  </Text>
                ))}
              </Stack>

              <Group gap="xs" mt="xs">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="light">
                    {tech}
                  </Badge>
                ))}
              </Group>

              {project.link && (
                <Anchor
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  mt="md"
                  fw={500}
                >
                  Link →
                </Anchor>
              )}
            </Stack>
          </Card>
        ))}
      </Stack>

      <Space h="md" />
    </Flex>
  );
};

export default KonradProjects;

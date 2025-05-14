import { Container, Title, Text, Button, Anchor, Box } from '@mantine/core';
import {
  heroWrapper,
  introText,
  mainTitle,
  subtitle,
  description,
} from '../../../styles';
import { motion } from 'motion/react';

interface HeroSectionProps {
  close: () => void;
}

function HeroSection({ close }: HeroSectionProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // adjust this to control timing
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Box style={heroWrapper}>
      <Container size="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={childVariants}>
            <Text style={introText}>Hello, my name is</Text>
          </motion.div>

          <motion.div variants={childVariants}>
            <Title style={mainTitle}>Konrad Kopko.</Title>
          </motion.div>

          <motion.div variants={childVariants}>
            <Title order={2} style={subtitle}>
              Thanks for clicking on my website!
            </Title>
          </motion.div>

          <motion.div variants={childVariants}>
            <Text style={description}>
              I am currently a Master&apos;s Student at{' '}
              <Anchor href="https://tech.cornell.edu/" c="blue">
                Cornell Tech
              </Anchor>{' '}
              where I&apos;m getting my{' '}
              <Anchor
                href="https://tech.cornell.edu/programs/masters-programs/jacobs-technion-cornell-dual-ms-health-tech/"
                c="blue"
              >
                Dual Master of Science Degrees with a Concentration in Health
                Tech
              </Anchor>
              . Before that, I graduated from{' '}
              <Anchor href="https://www.baruch.cuny.edu/" c="blue">
                Baruch
              </Anchor>{' '}
              in 2019 with a major in{' '}
              <Anchor
                href="https://zicklin.baruch.cuny.edu/academic-programs/undergraduate/majors/statistics-quantitative-modeling-bba/"
                c="blue"
              >
                Statistics and Quanitiative modeling
              </Anchor>{' '}
              <br />
              <br />
              I&apos;m focusing my studies on Healthcare and Bioinformatics.
              Currently, I am actively looking for an internship role as a{' '}
              <Text span fw={700}>
                ML engineer/Software Developer
              </Text>
            </Text>
          </motion.div>

          <motion.div variants={childVariants}>
            <Button
              variant="outline"
              color="blue"
              radius="md"
              size="md"
              onClick={close}
            >
              Take a look!
            </Button>
            <motion.div variants={childVariants}>
              <Text style={introText}>P.S. You can drag them {':)'} </Text>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;

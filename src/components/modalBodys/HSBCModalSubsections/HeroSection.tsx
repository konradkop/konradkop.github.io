import { Container, Title, Text, Box, Center } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { motion } from 'motion/react';
import { introText, mainTitle, subtitle, description } from '../../../styles';
import TechStackSection from '../../TechStack';

function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 50em)');
  const { height } = useViewportSize();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const heroWrapper = {
    height: isMobile ? height : height - 300,
    display: 'flex',
    alignItems: isMobile ? 'left' : 'center',
    justifyContent: isMobile ? 'left' : 'center',
    padding: isMobile ? '0' : '0rem 4rem',
  };

  return (
    <Box style={heroWrapper}>
      <Container>
        <Center>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={childVariants}>
              <Text style={introText}>Aug 2019 - Aug 2021</Text>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title style={mainTitle}>HSBC</Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Title order={2} style={subtitle}>
                Financial/Data Analyst
              </Title>
            </motion.div>

            <motion.div variants={childVariants}>
              <Text style={description}>
                Developed a Node.js/Puppeteer based script to parse through
                company financial data, bypassing the need for user-based
                inputs, negating user error. Previously, a dedicated analyst had
                to spend hours going through documents. Harnessed SQL-based data
                analysis software to iterate over company data, enriching and
                joining it with other company systems to output a user-readable
                format. Used SQL to query company data hosted on GCP’s BigQuery
                and provide updated and enriched financial information.
              </Text>
            </motion.div>
            <TechStackSection company={'HSBC'} />
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}

export default HeroSection;

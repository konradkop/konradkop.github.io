import {
  Text,
  Title,
  List,
  ThemeIcon,
  Grid,
  Image,
  Flex,
  Anchor,
} from '@mantine/core';
import BaruchPhoto from '../../assets/baruch-rectangle.jpg';
import { motion } from 'motion/react';

function BaruchModal() {
  const items = [
    'Strong foundation in statistical analysis, probability theory, and quantitative decision-making.',
    'Proficiency in data-driven business modeling, forecasting, and optimization techniques.',
    'Experience with statistical programming languages such as Python, R, and SQL for data analysis.',
    'Application of machine learning algorithms to financial and business datasets for predictive insights.',
    'Expertise in econometrics, regression analysis, and time-series forecasting for business strategy.',
    'Hands-on experience with data visualization tools like Matplotlib.',
    'Understanding of risk management, financial modeling, and quantitative trading strategies.',
    'Capstone project focused on real-world data analytics challenges, collaborating with industry professionals.',
  ];

  return (
    <>
      <Image radius="md" h={200} src={BaruchPhoto} />
      <div
        style={{
          padding: '20px',
          background: 'white',
          color: 'black',
          borderRadius: '8px',
        }}
      >
        <Grid>
          <Flex direction={'column'} align="center" style={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Title order={4} mb={5}>
                <Anchor
                  href="https://www.baruch.cuny.edu/"
                  target="_blank"
                  size="lg"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Baruch College
                </Anchor>
                | BBA: Statistics and Quantitative Modeling | NYC
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text size="sm" color="gray">
                Sept 2015 - May 2019
              </Text>
            </motion.div>
          </Flex>
          <List spacing="sm" size="sm" mt={10}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <List.Item
                  style={{ padding: 10 }}
                  icon={<ThemeIcon color="blue" size={10} radius="xl" />}
                >
                  {item}
                </List.Item>
              </motion.div>
            ))}
          </List>
        </Grid>
      </div>
    </>
  );
}

export default BaruchModal;

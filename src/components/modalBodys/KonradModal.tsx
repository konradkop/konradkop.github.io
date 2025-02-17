import { Title, List, ThemeIcon, Grid, Image, Flex } from '@mantine/core';
import konradSki from '../../assets/konrad-ski.jpg';
import { motion } from 'motion/react';

function KonradModal() {
  const items = ['Thanks for clicking on my website!'];

  return (
    <>
      <Image radius="md" h={500} src={konradSki} />
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
                Me | Software Engineer | NYC
              </Title>
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

export default KonradModal;

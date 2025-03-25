import { Box, Typography, Container } from '@material-ui/core';
import OrderForm from '../components/OrderForm';
import OrderCard from '../components/OrderCard';

const Home = () => {
  const orders = [
    { id: '1', status: 'Scheduled' },
    { id: '2', status: 'Picked Up' },
    // Add more sample orders
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Mama Fua</Typography>
      <OrderForm />
      <Box mt={4}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
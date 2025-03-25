import { Box, Typography, Button, Badge } from '@material-ui/core';

const OrderCard = ({ order }) => {
  return (
    <Box border={1} borderRadius={8} p={2} mb={2}>
      <Typography>Order ID: {order.id}</Typography>
      <Typography>Status: {order.status}</Typography>
      <Badge color={order.status === 'Delivered' ? 'primary' : 'secondary'}>
        {order.status}
      </Badge>
      <Button variant="contained" color="primary" mt={2}>View Details</Button>
    </Box>
  );
};

export default OrderCard;
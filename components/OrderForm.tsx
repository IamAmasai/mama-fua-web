import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button, TextareaAutosize } from '@material-ui/core';

const OrderForm = () => {
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [details, setDetails] = useState('');
  const [detergent, setDetergent] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Box>
      <FormControl fullWidth margin="normal">
        <InputLabel>Pickup Time</InputLabel>
        <Select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
          <MenuItem value="8-10 AM">8-10 AM</MenuItem>
          <MenuItem value="4-6 PM">4-6 PM</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Delivery Time</InputLabel>
        <Select value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)}>
          <MenuItem value="next day">Next Day</MenuItem>
          <MenuItem value="same-day">Same-Day Rush</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth margin="normal" label="Details" placeholder="Weight estimate (kg)" onChange={(e) => setDetails(e.target.value)} />

      <FormControl fullWidth margin="normal">
        <InputLabel>Detergent Preference</InputLabel>
        <Select value={detergent} onChange={(e) => setDetergent(e.target.value)}>
          <MenuItem value="standard">Mama Fua Standard</MenuItem>
          <MenuItem value="eco">Eco-Friendly</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth margin="normal" label="Special Instructions" placeholder="Hand-wash delicates" onChange={(e) => setInstructions(e.target.value)} multiline rows={4} />

      <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>Confirm Order</Button>
    </Box>
  );
};

export default OrderForm;
import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
<<<<<<< HEAD

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
=======
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  console.log("onUpdateQuantity type:", typeof onUpdateQuantity); // ✅ Debugging
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout"); // Redirects to the checkout page
  };
>>>>>>> d55f30e (Updated Checkout and LoginSignup)

  return (
    <Box sx={{ width: 300, padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Shopping Cart</Typography>
<<<<<<< HEAD
=======

>>>>>>> d55f30e (Updated Checkout and LoginSignup)
      {cartItems.length === 0 ? (
        <Typography sx={{ mt: 2 }}>Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
            <Box>
              <Typography>{item.name}</Typography>
              <Typography variant="body2">₱ {item.price * item.quantity}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
<<<<<<< HEAD
              <IconButton size="small" onClick={() => onUpdateQuantity(item.id, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
              <IconButton size="small" onClick={() => onUpdateQuantity(item.id, 1)}>
                <AddIcon />
              </IconButton>
=======
              {/* Decrease quantity */}
              <IconButton size="small" onClick={() => onUpdateQuantity?.(item.id, -1)} disabled={item.quantity <= 1}>
                <RemoveIcon />
              </IconButton>

              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>

              {/* Increase quantity */}
              <IconButton size="small" onClick={() => onUpdateQuantity?.(item.id, 1)}>
                <AddIcon />
              </IconButton>

              {/* Remove item from cart */}
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
              <IconButton size="small" color="error" onClick={() => onRemoveItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))
      )}
<<<<<<< HEAD
      {cartItems.length > 0 && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Total: ₱ {totalPrice}</Typography>
          <Button fullWidth sx={{ backgroundColor: '#FFC300', color: 'black', fontWeight: 'bold', mt: 2 }}>
            CHECKOUT
          </Button>
=======

      {/* Show Total & Checkout Button if cart is not empty */}
      {cartItems.length > 0 && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Total: ₱ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Typography>
          <Button
        variant="contained"
        sx={{ backgroundColor: "#FFC300", color: "black", marginTop: 3 }}
        onClick={() => navigate("/checkout", { state: { cart: cartItems, total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) } })}
        >
        CHECKOUT
      </Button>
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
        </>
      )}
    </Box>
  );
};

<<<<<<< HEAD
export default Cart;
=======
export default Cart;
>>>>>>> d55f30e (Updated Checkout and LoginSignup)

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, InputAdornment, Badge, Tabs, Tab, Button, IconButton, TextField, Grid, Card, CardMedia, CardContent, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import { Link } from "react-router-dom";



const categories = [
  'Featured', 'Group Meals', 'Chicken', 'Burgers', 'McSpaghetti', 
  'Rice Bowls', 'Desserts & Drinks', 'McCafé', 'Fries & Extras', 
  'Happy Meal', 'Sulit Busog Meals'
];

// Sample food items categorized
const foodItems = [
  { id: 1, name: "Green Apple Fizz", price: 71, category: "Desserts & Drinks", image: "/apple-fizz.png" },
  { id: 2, name: "McFlurry with Oreo", price: 69, category: "Desserts & Drinks", image: "/mcflurry-oreo.png" },
  { id: 3, name: "Hot Caramel Sundae", price: 57, category: "Desserts & Drinks", image: "/caramel-sundae.png" },
  { id: 4, name: "Apple Pie", price: 45, category: "Desserts & Drinks", image: "/apple-pie.png" },
  { id: 5, name: "Coke McFloat", price: 81, category: "McCafé", image: "/coke-mcfloat.png" },
  { id: 6, name: "Coke Zero", price: 77, category: "McCafé", image: "/coke-zero.png" },
  { id: 7, name: "two piece", price: 71, category: "Chicken", image: "/apple-fizz.png" },
];

const Header = () => {
  const [cart, setCart] = useState([]); // Cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart visibility
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default category

  // Function to add items to the cart
=======
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, InputAdornment, Badge, Button, IconButton, TextField, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginSignup from './LoginSignup'; 
import Cart from './Cart';
import { Link, useLocation } from "react-router-dom"; 
import Menu from './Menu'; 

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

>>>>>>> d55f30e (Updated Checkout and LoginSignup)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
<<<<<<< HEAD
  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  // Function to update quantity
  const updateQuantity = (itemId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };
  // Filter food items based on selected category
  const filteredItems = foodItems.filter(item => item.category === selectedCategory);
=======

  const location = useLocation();
>>>>>>> d55f30e (Updated Checkout and LoginSignup)

  return (
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#FFC300', padding: '8px 20px' }}> 
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<<<<<<< HEAD
       {/* Navigation Links & Cart */}
    
=======
          {/* Logo and Search Bar */}
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon sx={{ fontSize: 30, color: 'black' }} />
            </IconButton>
            <img src="/mcdo.png" alt="Restaurant Logo" style={{ height: '50px', width: 'auto' }} />
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold', color: 'black' }}>
<<<<<<< HEAD
=======
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, Typography, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFC300', padding: '5px 20px' }}> 
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Section: Logo and Menu Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <img 
              src="/mcdo.png"  
              alt="Restaurant Logo" 
              style={{ height: '50px', width: 'auto' }} 
            />
            <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 'bold', color: 'black' }}>
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
=======
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
              McDelivery
            </Typography>
          </Box>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Search Box */}
=======
          {/* Center: Search Box */}
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
=======
          {/* Search Box */}
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
          <TextField
            variant="outlined"
            placeholder="Search for your McDonald's favorites"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: '30px',
<<<<<<< HEAD
<<<<<<< HEAD
              marginLeft: '200px',
=======
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
=======
              marginLeft: '200px',
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
              width: '400px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'gray' },
                '&:hover fieldset': { borderColor: '#FF9900' },
                '&.Mui-focused fieldset': { borderColor: '#FF9900' },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Navigation Links & Cart */}
          <Box sx={{ display: 'flex', alignItems: 'left', marginLeft: '550px' }}>
          {[
              {label: 'Home', path: '/'},
              {label: 'Menu', path: '/'},
              {label: 'Orders', path: '/'},
              {label: 'My Account', path: '/account'}
              
              ].map((item) => (
              <Button 
              key={item} 
              sx={{ color: 'black',textTransform: 'none',fontWeight: 'bold', mx:1 }}
              component={Link}
              to={item.path}
              >
              {item.label}
              </Button>
            ))}
            </Box>
            {/* Shopping Cart */}
            <IconButton sx={{ color: 'black', ml: 2 }} onClick={() => setIsCartOpen(true)}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon sx={{ fontSize: 28 }} />
              </Badge>
            </IconButton>
          
=======
          {/* Navigation Links & Cart */}
          <Box sx={{ display: 'flex', alignItems: 'left', marginLeft: 'auto' }}>
            <Button sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }} component={Link} to="/Home">Home</Button>
            <Button sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }} component={Link} to="/Menu">Menu</Button>
            <Button sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }} component={Link} to="/">Profile</Button>
            <Button sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }} onClick={() => setIsLoginOpen(true)}>My Account</Button>
          </Box>

          {/* Shopping Cart */}
          <IconButton sx={{ color: 'black', ml: 7 }} onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon sx={{ fontSize: 28 }} />
            </Badge>
          </IconButton>
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
        </Toolbar>
      </AppBar>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
<<<<<<< HEAD
        <Cart cartItems={cart} 
        onRemoveItem={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
/>
      </Drawer>

      {/* Food Categories Navigation */}
      <Box sx={{ backgroundColor: 'white', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => {
            setSelectedTab(newValue);
            setSelectedCategory(categories[newValue]); // Change selected category
          }}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': { fontWeight: 'bold', textTransform: 'none', color: 'black', fontSize: '14px', mx: 3.4 },
            '& .Mui-selected': { color: '#FF5733' },
            '& .MuiTabs-indicator': { backgroundColor: '#FF5733' }
          }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>

      {/* Food Items Display */}
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>{selectedCategory}</Typography>
        <Grid container spacing={2} alignItems="stretch">
  {filteredItems.map((item) => (
    <Grid item xs={12} sm={6} md={3} key={item.id}>
      <Card sx={{ boxShadow: 3, borderRadius: "10px", display: "flex", flexDirection: "column", height: "100%" }}>
        <CardMedia component="img" height="140" image={item.image} alt={item.name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">₱ {item.price}</Typography>
        </CardContent>
        <Box sx={{ padding: "10px" }}>
          <Button 
            fullWidth 
            sx={{ backgroundColor: "#FFC300", color: "black", fontWeight: "bold" }}
            onClick={() => addToCart(item)}
          >
            Order
          </Button>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>

      </Box>
=======
          {/* Right Section: Navigation Links & Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {['Home', 'Menu', 'Send to Many', 'Orders', 'My Account'].map((text) => (
              <Button 
                key={text} 
                sx={{ 
                  color: 'black', 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  textTransform: 'none', 
                  mx: 1, 
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                {text}
              </Button>
            ))}

            <IconButton sx={{ color: 'black', ml: 2 }}>
              <img
                src="/basket.png"  
                alt="Cart"
                style={{ height: '30px', width: 'auto' }}  
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
=======
  <Cart 
    cartItems={cart} 
    onUpdateQuantity={(itemId, change) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        )
      );
    }}
    onRemoveItem={(itemId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    }}
  />
</Drawer>
      {/* already call in header */}
      {location.pathname === "/Menu" && <Menu addToCart={addToCart} />}


      {isLoginOpen && <LoginSignup isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />}
>>>>>>> d55f30e (Updated Checkout and LoginSignup)
    </Box>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 3e2941a67890a339659d6351097c0c8bf4d14fda
=======
export default Header;
>>>>>>> d55f30e (Updated Checkout and LoginSignup)

import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Tabs, Tab } from '@mui/material';
import { foodItems, categories } from './data';

const Menu = ({ addToCart }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default category

  // Filter food items based on selected category
  const filteredItems = foodItems.filter(item => item.category === selectedCategory);

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Food Categories Navigation */}
      <Tabs
        value={selectedTab}
        onChange={(event, newValue) => {
          setSelectedTab(newValue);
          setSelectedCategory(categories[newValue]);
        }}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '& .MuiTab-root': { fontWeight: 'bold', textTransform: 'none', color: 'black', fontSize: '14px', mx: 3.0 },
          '& .Mui-selected': { color: '#FF5733' },
          '& .MuiTabs-indicator': { backgroundColor: '#FF5733' },
        }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>

      {/* Food Items Display */}
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
                  onClick={() => addToCart(item)} // Call addToCart here
                >
                  ORDER
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;

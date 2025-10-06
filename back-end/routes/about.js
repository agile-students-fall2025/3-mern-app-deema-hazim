const express = require('express');
const router = express.Router();

// GET /api/about
router.get('/', (req, res) => {
  res.json({
    name: "Deema Hazim",
    description: `
      Hi! I'm Deema, a computer science student from the NYU Abu Dhabi campus studying abroad 
      in NYC this semester. Last semester, I studied abroad at NYU Paris, and really enjoyed my
      experience. Outside of academics, I play volleyball on the NYUAD Women's Volleyball team. 
      I am a also huge fan of Formula 1 and football (the european one), and love to watch them when I have time.
    `,
    image: "https://i.imgur.com/NdXAQ5I.jpeg"
  });
});

module.exports = router;
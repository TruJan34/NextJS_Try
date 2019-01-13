const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
  return res.end('We made it! from other file');
});

module.exports = router;

import express from 'express';

const router = express.Router();

router.get('/api/v2/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;

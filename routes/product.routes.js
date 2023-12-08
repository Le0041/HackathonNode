import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Hello World Product');
})

export default router;
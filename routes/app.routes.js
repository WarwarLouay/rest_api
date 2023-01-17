const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.post('/order', orderController.create);
router.get('/order', orderController.findAll);

module.exports = router;
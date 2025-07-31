// Billing routes
const express = require('express');
const router = express.Router();
const { generateInvoice } = require('../utils/generateInvoice');

router.post('/invoice', (req, res) => {
    const invoice = generateInvoice(req.body);
    res.json({ invoice });
});

module.exports = router;
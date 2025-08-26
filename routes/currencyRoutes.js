const express = require("express");
const axios = require("axios");
const router = express.Router();

// Load environment variables
require("dotenv").config();

const API_KEY = process.env.EXCHANGE_API_KEY; // use env variable

// Convert currency
router.get("/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({
      error: "Please provide from, to, and amount query parameters.",
    });
  }

  try {
    // Make sure amount is a number
    const numAmount = Number(amount);
    if (isNaN(numAmount)) {
      return res.status(400).json({ error: "Amount must be a valid number." });
    }

    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
    );

    const rates = response.data.conversion_rates;

    if (!rates[to]) {
      return res.status(400).json({
        error: `Conversion rate from ${from} to ${to} not available.`,
      });
    }

    const convertedAmount = numAmount * rates[to];

    res.json({
      from,
      to,
      amount: numAmount,
      convertedAmount,
      rate: rates[to],
    });
  } catch (err) {
    console.error(err.response ? err.response.data : err.message); // log actual error for debugging
    res.status(500).json({ error: "Failed to fetch currency data." });
  }
});

module.exports = router;
//http://localhost:5000/api/currency/convert?from=USD&to=INR&amount=100
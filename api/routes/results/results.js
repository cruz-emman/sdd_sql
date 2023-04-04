const express = require('express');
const { addResult, getResults } = require('../../controllers/results/results');

const router = express.Router();

router.post('/', addResult)
router.get('/', getResults)

module.exports = router;

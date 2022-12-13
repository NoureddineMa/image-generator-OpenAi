const express = require('express')
const router = express.Router();
const { generateImage } = require('../controllers/openaiController')

router.post('/generateimage', generateImage);

module.exports = router;
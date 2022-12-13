const express = require('express')
const router = express.Router();

router.post('/generateimage', (req, res) => {
    res.status(200)
       .json({
        succes: true,
       })
})

module.exports = router;
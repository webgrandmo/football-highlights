const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')/* GET home page. */
const headers = {
    "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
    "x-rapidapi-key": "355369b91emshf2a61609ed78885p154031jsn638e894ef27e"
}

// Get matches
router.get('/', (req, res) => {
    fetch('https://free-football-soccer-videos1.p.rapidapi.com/v1/', { headers: headers })
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
});

module.exports = router;
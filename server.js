const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const HandlebarsIntl = require('handlebars-intl');
const server = http.createServer(app);
const static = path.join(__dirname, 'views');

// Set folder for static assets(css, js img)
app.use(express.static(static));

// Handle Bars Middleware
app.engine('handlebars', exphbs({
    partialsDir: __dirname + '/views/partials/components'
}));
app.set('view engine', 'handlebars');
HandlebarsIntl.registerWith(Handlebars);

const PORT = process.env.PORT || 8000;


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/', (req, res) => {
    const fetch = require('node-fetch')/* GET home page. */
    const headers = {
        "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
        "x-rapidapi-key": "355369b91emshf2a61609ed78885p154031jsn638e894ef27e"
    }
    fetch('https://free-football-soccer-videos1.p.rapidapi.com/v1/', { headers: headers })
        .then(response => response.json())
        .then(data => {
            res.render('index', { matches: data, videos: data.videos })
        })
});

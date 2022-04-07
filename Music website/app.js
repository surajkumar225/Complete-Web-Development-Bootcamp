const express = require("express")
const path = require("path")
const app = express();
const port = 8000;

// Express specific stuff
app.use('/static', express.static('static')) 
app.use(express. urlencoded())

//Pug specific stuff
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views')) 

// Endpoints 
app.get('/', (req, res) => { 
    const params = {}
    res.status(200).render('index.pug', params);
})



// Start the server
app.listen(port, ()=> {
    console.log(`The application started successfully on port ${port}`)
})
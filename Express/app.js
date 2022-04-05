const express = require("express")
const path = require("path")
const app = express();
const port = 80;

// Express specific stuff
app.use('/static', express.static('static')) // For serving static files

//Pug specific stuff
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory


// Endpoints
app.get('/', (req, res) => {
    const con = "This is something u have never used before"
    const params = {'title': "Playing wid Pug", 'content': con}
    res.status(200).render('index.pug', params);
})

// Start the server
app.listen(port, ()=> {
    console.log(`The application started successfully on port ${port}`)
})









//Pug demo endpoint
// app.get("/demo", (req, res)=> {
//     res.status(200).render('demo', { title: 'Hey Trinity', message: 'This is amazing!' })
// });

// app.get("/", (req, res)=> {
    //     res.status(200).send("This is home page of my first express app")
// });

// app.get("/about", (req, res)=> {
//     res.send("This is about page of my first express app")
// });

// app.post("/about", (req, res)=> {
//     res.send("This is a post request about page of my first express app")
// });

// app.get("/this", (req, res)=> {
//     res.status(404).send("This page is not found")
// });

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');   // filesystem
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'user.json');

const port = 3000;

// init app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', ejs);
app.use(express.static('public'));  // for css

app.get('/', (req, res) => {
    fs.readFile(filePath, (error, fileContent) =>{
        let data;
        if(error){
            data = "Error reading JSON!";
        }

        res.render('index.ejs', {
            data: JSON.parse(fileContent)
        });
    });
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const achiv = req.body.achievement;

    let data = [];
    data.push(name);
    data.push(achiv);

    fs.writeFile(filePath, JSON.stringify(data), (error) => {
        console.log("User JSON writeFile \"adding\": " + error);
    });

    res.render('index.ejs', {
        data: data
    });
});

// must be last, else will be triggered before any other logic
app.use((req, res) => {
    res.render('404.ejs');

    //res.status(404).sendFile(path.join(rootDir, 'views', '404.ejs')); // used to send specific file from specific place
});

// app will run on this port
app.listen(port, () => {
    console.log(`app running on port ${port}\n`);
});
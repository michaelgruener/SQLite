import express from 'express';

// express app
const app = express();

//converting post requests into readable format
app.use(express.urlencoded({extended: true}));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//import DB
import db from './db.js';

//routing
app.get('/', (req, res)=>{

    let sql = `SELECT * FROM users`;

    db.all(sql, (err, rows)=> {
        if(err) return console.error(err.message);
        res.render('index', {db: rows});
    });

});

app.post('/', (req, res)=> {
    
    let name = req.body.name;
    let email = req.body.email;

    let sql = `INSERT into users (name, username) VALUES('${name}', '${email}')`;
    // sql = `SELECT * FROM users`;

    db.all(sql, (err, rows) => {
        if(err) return console.error(err.message);
        console.log(rows);
    });

});
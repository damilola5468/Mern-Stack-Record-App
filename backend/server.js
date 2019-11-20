const mysql = require('mysql');
const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');


var app = express();
app.use(bodyParser.json());
app.use(cors());

 var mysqlConnection = mysql.createConnection({
     host: 'localhost',
     user:'root',
     password: '',
     database: 'user'
 });

 mysqlConnection.connect((err) =>{
     if(!err){
         console.log('Db Connection created!');
     }else{
        console.log('Db Connection Failed: !' + json.stringify(err, undefined, 2));
     }
 });

 app.listen(4000, () => {
     console.log('App listening on port 4000!');
 });


 app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE user';
    mysqlConnection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});



app.get('/User', function(req,res){
    var sql = 'SELECT * FROM users';
    mysqlConnection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });

   
app.get('/User/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


app.delete('/user/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});


app.post('/User', (req, res) => {
    let user = req.body;
    var sql = "INSERT INTO users (firstname, surname, age, height, weight, haircolor) VALUES ( ?, ?, ?, ?, ?,?) ;";
    mysqlConnection.query(sql, [user.firstname, user.surname, user.age, user.height, user.weight,user.haircolor], (err, rows, fields) => {
        if (!err)
            console.log('Inserted');
    })
});

app.put('/update/:id', (req, res) => {
    let use = req.body;
    let sql = `UPDATE users SET firstname = '${use.firstname}', surname = '${use.surname}', age = '${use.age}', height = '${use.height}', weight = '${use.weight}', haircolor = '${use.haircolor}' WHERE id = ${req.params.id}`;
    mysqlConnection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User updated...');
    });
});
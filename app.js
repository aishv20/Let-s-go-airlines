const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}))


function getConn(){
    return mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: 'password',
           database: 'NodeMysql'
        })
}

//CREATING DB:
//getConn().connect((err)=>{
//    if(err) throw err
//   console.log('Connected');
    // create database:
//    const db = 'CREATE DATABASE NodeMysql'
//    getConn().query(db,(err, res)=>{
//        if(err) throw err;
//        console.log('DATABASE Created')
//    })
//})

//CREATING TABLE:
//getConn().connect((err)=>{
//    if(err) throw err
//    console.log('Connected');
    // create table:
//    const db = 'CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, origin VARCHAR(50), destination VARCHAR(50), passengers INT, date DATE )';
//    getConn().query(db,(err, res)=>{
//        if (err) throw err;
//        console.log('TABLE Created')
//    })
//})


//INSERTING DATA:

getConn().connect((err)=>{
    if(err) throw err
    console.log('Connected');
    // create table:
    const sql = 'INSERT INTO user VALUES ?';
    const values = [
        [, 'Bangalore', 'Kochi', '2', '2021-08-23']
    ]
    getConn().query(sql, [values], (err, results)=>{
        if (err) throw err;
        console.log('DATA inserted', results.affectedRows);
    })
})

app.get('/', (req, res)=>{
    console.log('responding to root route')
    res.send('Your nodeJS is successfully setup')
})

app.listen(3333, ()=>{
    console.log('server running port is 3333');
})
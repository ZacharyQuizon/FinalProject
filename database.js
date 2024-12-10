import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({ //Creates the connection to database. Connection pools help reduce time connecting to the MySQL server by reusing a previous connection and keeping it open.
    host: process.env.MYSQL_HOST,   
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();   //method that allows us to use async/await to handle the results of the queries. like a "promise" to do something in the future. Can make plans(callbacks) for what should happen when that promise is fulfilled(success) or rejected(failure). Like an if statement?

const result = await pool.query("SELECT * FROM transactions");  //await pauses the execution of the function until the query has finished.
console.log(result);
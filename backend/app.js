const express = require('express'); 
const mysql = require('mysql');

const app = express();
const port = 3001;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chukwuebuka@1',
    database: 'test'
});


// Execute ALTER USER statement to set the authentication method
db.query("ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'Chukwuebuka@1'", (err, result) => {
    if (err) {
        console.error("Error altering user:", err);
    } else {
        console.log("User altered successfully.");
    }
});


app.get('/', (request, response) => {
    response.send('This is my first Express app using MySQL as a backend.');
});


app.get("/audio", (request, response) => {
    const q = "SELECT * FROM test.audio";
    db.query(q, (err,data)  => {
        if (err) return response.json(err)
        return response.json(data)
    })
});

app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`);
});

import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your database user
  password: 'Tiger@1999', // Replace with your database password
  database: 'ecommerce', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

export default db;

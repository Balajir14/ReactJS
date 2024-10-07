Create a New Folder named Backup in your local system.
run the command:

1.  npm init -y
2.  npm install express mysql2 cors
3.  copy the server.js file and place it in your root folder.
4.  node server.js

Database:

1. Search Google : xammp download
2. download the file ( based on your system : windows/linux )
3. Install the downloaded file.
4. Once installed, in your local pc, search "xampp"
5. You will notice 'xampp control panel', then click and open it.
6. Once opened, start the Apache, and Mysql server.
7. Once started, Go to your browser and type "http://localhost/phpmyadmin/" and enter.
8. Create Database (ex: massmind) use Query also (ex: CREATE DATABASE massmind;)
9. Go to SQL icon button next to browse on the top.
10. Type the following Query and Click Go.
    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );




To run this backend:
1. npm install
2. create db name in MySQL and paste the same in server.js file Line number: 10
3. node server.js

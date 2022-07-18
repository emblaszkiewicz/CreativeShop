const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// import routes
const productsRoutes = require('./routes/products.routes');
const bannersRoutes = require('./routes/banners.routes');
const categoriesRoutes = require('./routes/categories.routes');
const employeesRoutes = require('./routes/employees.routes');
const opinionsRoutes = require('./routes/opinions.routes');
const brandsRoutes = require('./routes/brands.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', bannersRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', employeesRoutes);
app.use('/api', opinionsRoutes);
app.use('/api', brandsRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
const NODE_ENV = process.env.NODE_ENV;
const dblogin = process.env.dbpass;
let dbUri = 'mongodb+srv://Atlas:FlrEAwOMGrOTMsiM@cluster0.mjc1u1p.mongodb.net/CreativeShopDB?retryWrites=true&w=majority';

/*if(NODE_ENV === 'production') dbUri = 'mongodb+srv://' + dblogin + '@cluster0.mjc1u1p.mongodb.net/CreativeShopDB?retryWrites=true&w=majority';
else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/CreativeShopDB';
else dbUri = 'mongodb://localhost:27017/CreativeShopDB';*/

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  if(NODE_ENV !== 'test') console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGO_DB_CONFIG } = require('./config/app.config');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database Connected');
}, (error) => {
    console.log('Can\'t Connect to Databse: ' + error);
});

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use('/api', require('./routes/app.routes'));

app.listen(process.env.PORT || 4000, '0.0.0.0', function() {
    console.log('server run at port 4000');
});
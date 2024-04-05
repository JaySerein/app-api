const mongoose = require('mongoose');

const Connection = mongoose.createConnection('mongodb://127.0.0.1:27017/job-db').on('open', () => {
   console.log('Mongoose DB Connected!');
}).on('error', () => {
   console.log('Mongoose DB Connecting Fail!');
});

module.exports = Connection;
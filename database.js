const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv:///localhost:5500'; 
 mongoose.connect(URI)
     .then(db => console.log('Base de datos conectada'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 
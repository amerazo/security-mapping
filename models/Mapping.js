const mongoose = require('mongoose');
const mappingSchema = new mongoose.Schema({
    
    threat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Threat',
    },
    control: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SecurityControl',
    },
    controlName: String,
    threatName: String,
  });
  
module.exports = mongoose.model('Mapping', mappingSchema);
  
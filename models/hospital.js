const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // acceptTerms: {
  //   type: Boolean,
  //   required: true,
  // },
}, { timestamps: true });

const Hospital = mongoose.models.Hospital ||mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital
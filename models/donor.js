const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
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
  bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Valid blood groups
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // aadharCard: {
  //   type: String,
  //   required: true,
  // },
  // acceptTerms: {
  //   type: Boolean,
  //   required: true,
  // },
}, { timestamps: true });
const Donor = mongoose.models.Donor ||mongoose.model('Donor', donorSchema);

module.exports = Donor;

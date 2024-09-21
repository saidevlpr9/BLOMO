const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  licenseNumber: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  acceptTerms: {
    type: Boolean,
    required: true,
    default: false,
  },
}, { timestamps: true });

const BloodBank = mongoose.models.BloodBank || mongoose.model("BloodBank", bloodBankSchema);
module.exports = BloodBank;
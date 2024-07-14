// src/models/Invitation.js
const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  creatorId: mongoose.Schema.Types.ObjectId,
  eventName: String,
  date: String,
  time: String,
  location: String,
  description: String,
  invitees: [String],
  status: String,
});

module.exports = mongoose.model('Invitation', invitationSchema);

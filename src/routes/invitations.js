// src/routes/invitations.js
const express = require('express');
const Invitation = require('../models/Invitation');
const router = express.Router();

router.post('/', async (req, res) => {
  const invitation = new Invitation(req.body);
  await invitation.save();
  res.send('Invitation created');
});

router.get('/', async (req, res) => {
  const invitations = await Invitation.find();
  res.json(invitations);
});

router.get('/:id', async (req, res) => {
  const invitation = await Invitation.findById(req.params.id);
  res.json(invitation);
});

router.put('/:id', async (req, res) => {
  await Invitation.findByIdAndUpdate(req.params.id, req.body);
  res.send('Invitation updated');
});

router.delete('/:id', async (req, res) => {
  await Invitation.findByIdAndDelete(req.params.id);
  res.send('Invitation deleted');
});

module.exports = router;

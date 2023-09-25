// SET UP
const express = require('express');
const router = express.Router();

// THREAT SCHEMA IMPORT
const Threat = require('../models/Threat'); 

// THREAT SEED DATA IMPORT
const threatSeedData = require('../models/seed');

// INDEX: GET ALL THREATS
// http://localhost:2000/threats
router.get('/threats', async (req, res) => {
  // RETRIEVE LIST OF ALL THREATS IN THE DATABASE
  const threats = await Threat.find({});
  // RENDER THE 'threatsIndex' EJS FILE AND PASS THE 'threats' DATA TO IT
  res.render('threats/threatsIndex', { threats });
});

// NEW ROUTE
// http://localhost:2000/threats/new
router.get('/threats/new', (req, res) => {
// RENDER THE 'threatsNew' EJS FILE AND PASSED AN OBJECT WITH { Threat }
// { Threat } WILL CREATE A VAR NAMED "Threat" AVAILABLE IN THE 'threatsNew' TEMPLATE
res.render('threats/threatsNew', { Threat });
});

// CREATE ROUTE
// http://localhost:2000/threats
router.post('/threats', async (req, res) => {
// EXTRACT THE REQUEST BODY DATA THAT CONTAINS INFO ABOUT THE NEW THREAT
const newThreatData = req.body;
// CREATE A THREAT IN THE DATABASE USING EXTRACTED DATA
const newThreat = await Threat.create(newThreatData);
// TAKE THE USER TO A NEW PAGE THAT DISPLAYS THE NEW ENTRY
res.redirect(`/threats/${newThreat._id}`);
});

// SEED ROUTE
// http://localhost:2000/threats/seed-threats
router.get('/seed', async (req, res) => {
// REMOVE ALL EXISTING THREATS FROM THE DB
const removedThreats = await Threat.deleteMany({});
// INSERT SEED DATA FOR THREATS INTO THE DB
const addedThreats = await Threat.insertMany(threatSeedData);
// SEND JSON RESPONSE INDICATING THE COUNT OF REMOVED && ADDED THREATS
res.json({ removedCount: removedThreats.deletedCount, addedCount: addedThreats.length });
});

// SHOW ROUTE
// http://localhost:2000/threats/:threatId
// EXAMPLE: http://localhost:2000/threats/650e78a1cf34ebb115e57dca
router.get('/threats/:threatId', async (req, res) => {
// EXTRACT THE THREAT ID FROM THE URL PARAMETER
const threatId = req.params.threatId;
// FIND A THREAT BY ITS ID IN THE DB
const threat = await Threat.findById(threatId);
if (threat) {
// IF THE THREAT IS FOUND, RENDER THE 'threatsDetails' EJS FILE && PASS THE 'threat' DATA TO IT
res.render('threats/threatsDetails', { threat });
} else {
// IF THE THREAT IS NOT FOUND, SEND A MESSAGE INDICATING THAT THE THREAT ID IS NOT AVAIL
res.send('Threat ID not available');
}
});

// EDIT ROUTE
// http://localhost:2000/threats/:threatId/edit
// EXAMPLE: http://localhost:2000/threats/650e78a1cf34ebb115e57dca/edit
router.get('/threats/:threatId/edit', async (req, res) => {
// EXTRACT THE THREAT ID FROM THE URL PARAMETER
const threatId = req.params.threatId;
// FIND A THREAT BY ITS ID IN THE DATABASE
const threat = await Threat.findById(threatId);
if (threat) {
// IF THE THREAT IS FOUND, RENDER THE 'threatsEdit' EJS FILE && PASS THE 'threat' DATA TO IT
res.render('threats/threatsEdit', { threat });
} else {
// IF THE THREAT IS NOT FOUND, SEND A MESSAGE INDICATING THAT THE THREAT ID IS NOT AVAIL
res.send('Threat ID not available.');
}
});

// PUT UPDATE ROUTE
// http://localhost:2000/threats/:threatId
router.put('/threats/:threatId', async (req, res) => {
// EXTRACT THE THREAT ID FROM THE URL PARAMETER
const threatId = req.params.threatId;
// EXTRACT UPDATED THREAT DATA FROM THE REQUEST BODY 
const updatedThreatData = req.body;
// UPDATE THE THREAT IN THE DB AND GET THE UPDATED THREAT
const updatedThreat = await Threat.findByIdAndUpdate(threatId, updatedThreatData, { new: true });
if (updatedThreat) {
// IF THE THREAT IS UPDATED, REDIRECT TO THE THREAT'S DETAILS PAGE
res.redirect(`/threats/${threatId}`);
} else {
// IF THE THREAT IS NOT FOUND, SEND A MESSAGE INDICATING THAT THE THREAT ID IS NOT AVAILABLE
res.send('Threat ID not available');
}
});

// DELETE ROUTE
// http://localhost:2000/threats/:threatId
router.delete('/threats/:threatId', async (req, res) => {
  // EXTRACT THE THREAT ID FROM THE URL PARAMETER
  const threatId = req.params.threatId;
  // DELETE THE THREAT FROM THE DATABASE BY ITS ID
  const deletedThreat = await Threat.findByIdAndDelete(threatId);
  if (deletedThreat) {
    // IF THE THREAT IS DELETED, REDIRECT TO THE INDEX PAGE AFTER DELETION
    res.redirect('/threats');
  } else {
    // IF THE THREAT IS NOT FOUND, SEND A MESSAGE INDICATING THAT THE THREAT ID IS NOT AVAILABLE
    res.send('THREAT ID DOES NOT EXIST');
  }
});

// EXPORT ROUTER - TO BE AVAILABLE IN SERVER.JS
module.exports = router;

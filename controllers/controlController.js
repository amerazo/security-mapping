const express = require('express'); 
const router = express.Router(); 
//IMPORT CONTROL MODEL
const Control = require('../models/Control'); 

//SEED DATA FOR CONTROLS
const controlsSeedData = require('../models/controls-seed');

// INDEX ROUTE
router.get('/', async (req, res) => {
    // GET ALL CONTROLS FROM DB
    const controls = await Control.find({}); 
    //DISPLAY PAGE WITH ALL CONTROLS
    res.render('controls/controlsIndex', { controls });
});

// NEW ROUTE
router.get('/new', (req, res) => {
    // DISPLAY PAGE FOR CREATING A NEW CONTROL
    res.render('controls/controlsNew'); 
});

// CREATE ROUTE
router.post('/', async (req, res) => {
    // GET DATA FROM SUBMITTED FORM
    const newControlData = req.body; 
    // CREATE A NEW CONTROL IN DB
    const newControl = await Control.create(newControlData);
    // REDIRECT USER TO NEWLY CREATED CONTROLS DETAILS PAGE TO SHOW ENTRY
    res.redirect(`/controls/${newControl._id}`); 
});

// CONTROL SEED ROUTE: 
router.get('/control-seed', async (req, res) => {
    // REMOVE ALL EXISTING CONTROLS FROM THE DB
    const removedControls = await Control.deleteMany({}); 
    //RE-SEED DB
    const addedControls = await Control.insertMany(controlsSeedData); 
    //RESPOND WITH JSON INDICATING COUNTS OF ENTRIES AND REMOVALS
    res.json({ removedCount: removedControls.deletedCount, addedCount: addedControls.length }); 
});

// SHOW ROUTE
router.get('/:controlId', async (req, res) => {
    // GET CONTROL ID FROM URL
    const controlId = req.params.controlId; 
    // FIND CONTROL BY ITS ID IN DB
    const control = await Control.findById(controlId); 
    if (control) {
    // SHOW PAGE WITH CONTROL DETAILS
    res.render('controls/controlsDetails', { control }); 
    } else {
    // SEND MESSAGE IF THE CONTROL IS NOT FOUND
    res.send('CONTROL ID NOT FOUND'); 
    }
});

// EDIT ROUTE
router.get('/:controlId/edit', async (req, res) => {
    // GET THE CONTROL ID FROM THE URL
    const controlId = req.params.controlId; 
    // FIND A CONTROL BY ID FROM DB
    const control = await Control.findById(controlId); 
    if (control) {
    // DISPLAY A PAGE FOR EDITING THE CONTROL
    res.render('controls/controlsEdit', { control }); 
    } else {
    // SEND MESSAGE IF CONTROL IS NOT FOUND
    res.send('CONTROL NOT FOUND'); 
    }
});

// PUT UPDATE ROUTE
router.put('/:controlId', async (req, res) => {
    // GET CONTROL ID FROM URL
    const controlId = req.params.controlId; 
    // GET DATA TO UPDATE FROM THE SUBMITTED FORM
    const updatedControlData = req.body;
    // UPDATE CONTROL IN DB 
    Control.findByIdAndUpdate(controlId, updatedControlData, { new: true }) 
    .then((updatedControl) => {
    if (updatedControl) {
    // REDIRECT USER TO THE CONTROLS DETAILS PAGE
    res.redirect(`/controls/${controlId}`); 
    } else {
    // SEND MESSAGE IF CONTROL IS NOT FOUND
    res.send('CONTROL NOT FOUND'); 
    }
    });
});

// DELETE ROUTE
router.delete('/:controlId', async (req, res) => {
    // GET THE CONTROL ID FROM THE URL
    const controlId = req.params.controlId; 
    // DELETE CONTROL FROM THE DB
    const deletedControl = await Control.findByIdAndDelete(controlId); 
    if (deletedControl) {
    // REDIRECT USER TO THE CONTROLS LIST AFTER DELETION
    res.redirect('/controls'); 
    } else {
    // SEND A MESSAGE IF THE CONTROL IS NOT FOUND
    res.send('Control not found'); 
    }
});

module.exports = router; 

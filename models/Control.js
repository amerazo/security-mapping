const mongoose = require('mongoose');
const securityControlSchema = new mongoose.Schema({

    controlIdentifier: {
        type: String,
        default: ''
    },
    controlName: {
        type: String,
        default: ''
    },
    controlText: {
        type: String,
        default: ''
    },
    discussion: {
        type: String,
        default: ''
    },
    relatedControls: {
        type: String,
        default: ''
    },
    securityType: {
        type: String,
        enum: ['Administrative Control', 'Physical Control', 'Technical Control'],
        default: 'Technical Control', 
    },
    controlFramework: {
        type: String,
        enum: ['PCI DSS', 'ISO 27001', 'NIST SP 800-53', 'HIPAA', 'CIS Controls', 'Other'],
        default: 'Other',
    },
    implementation: {
        type: String,
        enum: ['Not Implemented', 'Fully Implemented', 'Partially Implemented', 'On the Roadmap'],
        default: 'Not Implemented', 
    },
    notes: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date,
        default: Date.now
    },
}, {
    strict: false // FOR FIELDS NOT DEFINED IN THE SCHEMA, SPECIFICALLY PARANTHASES
});


module.exports = mongoose.model('SecurityControl', securityControlSchema);

const mongoose = require('mongoose');
const threatSchema = new mongoose.Schema({
    ID: String,
    name: String,
    description: String,
    url: String,
    created: { type: Date, default: Date.now },
    lastModified: { type: Date, default: Date.now },
    version: String,
    tactics: String,
    detection: String,
    platforms: String,
    tacticType: String,
    MTCID: String,
    relationshipCitations: String,
});

module.exports = mongoose.model('Threat', threatSchema);

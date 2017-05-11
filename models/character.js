const mongoose = require('mongoose');
const config = require('../config/database');

//Character Schema
const Character = new mongoose.Schema({
    name: String,
    dateupdated: String,
    progression: Number,
    btag: String,
    lastupdated: String,
    info: {
        style:  String,
        zone: String,
        realm: String,
        guild: String,
        commetary: String,
        class:String,
        ilvl: Number,
        dateupdated: String,
        commentary: String
    },
    contact: Boolean

},{
    versionKey: false
});

const characterModel = module.exports = mongoose.model('Character', Character); // pluralization

module.exports.addCharacter = (newCharacter, callback) => {
    newCharacter.save(callback)
};

// find a character by class
module.exports.findByClass = (wowClass, callback) => {
    const query = {'info.class': wowClass};
    characterModel.find(query, callback).sort({'info.ilvl': -1})
};

// find a character by class
module.exports.findById = (Id, callback) => {
    const query = {'_id': Id};
    characterModel.find(query, callback)
};


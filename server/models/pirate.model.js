const {Schema,model} = require('mongoose');

const PirateSchema = new Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required"]
    },
    url: {
        type: String,
        required: [true, "URL is required"]
    },
    treasureChests: {
        type: Number,
        required: [true, "# of Treasure Chests are required"]
    },
    phrase: {
        type: String,
        required: [true, "Catch Phrase is required"]
    },
    position: {
        type: String,
    },
    pegLeg : {
        type: String
    },
    eyePatch: {
        type: String
    }, 
    hookHand: {
        type: String
    }
},{timestamps:true});

const Pirate = model('Pirate', PirateSchema);

module.exports = Pirate;
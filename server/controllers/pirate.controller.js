const PirateModel = require('../models/pirate.model');

const connectionCheck =((req,res)=>{
    res.json({ message: "Connection is properly Working.. for now.." });
})

const createNew=((req,res)=>{
    PirateModel.create(req.body)
    .then((newPirate)=>{
        res.json(newPirate)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json(err);
    })
})

const showOnePirate=((req,res)=>{
    PirateModel.find({_id: req.params.pirateId})
    .then((onePirate)=>{res.json(onePirate)})
    .catch((err)=>console.log(err))
})

const showAll=((req,res)=>{
    PirateModel.find().sort({name:1})
    .then((allPirates)=>{
        res.json(allPirates)})
    .catch((err)=>console.log(err))
})

const deleteOne=((req,res)=>{
    PirateModel.deleteOne({_id: req.params.pirateId})
    .then((deletedPirate)=>res.json(deletedPirate))
    .catch((err)=>console.log(err))
})

module.exports = {
    connectionCheck,
    createNew,
    showOnePirate,
    showAll,
    deleteOne
};
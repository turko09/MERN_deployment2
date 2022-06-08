const PirateController = require('../controllers/pirate.controller');

module.exports = (app) => {
    app.get('/api/checkConnection', PirateController.connectionCheck);
    app.post("/api/createNew", PirateController.createNew);
    app.get("/api/showOne/:pirateId", PirateController.showOnePirate);
    app.get("/api/showAll", PirateController.showAll);
    app.delete("/api/deleteOne/:pirateId", PirateController.deleteOne)
}
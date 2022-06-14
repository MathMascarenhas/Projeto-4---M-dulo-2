const routes = require("express").Router();
const ArtistsController = require("../controllers/ArtistsControllers");

routes.get("/", ArtistsController.getAll);
routes.get("/artists/:id", ArtistsController.getById);
routes.get("/createPage", ArtistsController.createPage);
routes.post("/create", ArtistsController.create);
routes.get("/editPage/:id", ArtistsController.editPage);
routes.post("/edit/:id", ArtistsController.edit);
routes.get("/delet/:id", ArtistsController.delet);

module.exports = routes;
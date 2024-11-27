const router = require("express").Router();

const isAuthenticated = require("./../common/middleware/IsAuthenticated");
//const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

const TheaterController = require("./controllers/TheaterController");

router.get("/top", [isAuthenticated.check], TheaterController.getTopTheaters);

module.exports = router;
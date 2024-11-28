const router = require("express").Router();

const isAuthenticated = require("./../common/middleware/IsAuthenticated");

const TheaterController = require("./controllers/TheaterController");

router.get("/top", [isAuthenticated.check], TheaterController.getTopTheaters);

module.exports = router;
const router = require("express").Router();
const messageRoutes = require("./message");

// Message routes
router.use("/message", messageRoutes);

module.exports = router;
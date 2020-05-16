const db = require("../models");

// Defining methods for the messageController
module.exports = {
    create: function(req, res) {
      db.Message
        .create(req.body)
        .then(dbModelRes => res.json(dbModelRes))
        .catch(err => res.status(422).json(err));
    }
};
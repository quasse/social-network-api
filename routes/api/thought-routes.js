const router = require("express").Router();

const { addThought } = require("../../controllers/thought-conroller");

router.route("/:userId").post(addThought);

module.exports = router;

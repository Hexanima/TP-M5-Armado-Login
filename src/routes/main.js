const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

const validator = require("../validations/formValidation");

router.get("/", controller.index);

router.post("/", validator, controller.formSend);

module.exports = router;

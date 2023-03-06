const { check, body } = require("express-validator");

module.exports = [
  check("name").notEmpty().withMessage("Debe escribir un nombre"),
  check("email").notEmpty().withMessage("Debe escribir un email").bail().isEmail().withMessage("Email incorrecto"),
  check("age").notEmpty().withMessage("Debe ingresar un numero"),
  body("age").custom((value) => {
    return parseInt(value)
    }).withMessage("No ingresó un numero")
];

const { validationResult } = require("express-validator");

controller = {
  index: (req, res) => {

    res.render("index", {
      session: req.session,
    });
  },
  formSend: (req, res) => {
    let errors = validationResult(req);

    if(errors.isEmpty()) {
        req.session.user = {
            name: req.body.name,
            email: req.body.email,
            color: req.body.color,
            age: req.body.age,
            remember: req.body.remember,
            mensaje: `Hola ${req.body.name}, elegiste el color: ${req.body.color}, tu email es: ${req.body.email} y tu edad es: ${req.body.age}`,
          };
      
          res.locals.user = req.session.user;
          res.redirect("/");
    } else {
      console.log(errors)
        res.render("index", {
            errors: errors.mapped(),
            session : {
                user: req.body
            }
        })
    }
  },
};

module.exports = controller;

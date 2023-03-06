const { validationResult } = require("express-validator");

controller = {
  index: (req, res) => {
    res.render("index", {
      session: req.session,
    });
  },
  formSend: (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("index", {
        errors: errors.mapped(),
        session: req.session || undefined
      });
    } else {
      let colorName = req.body.color;
      let color = "white";

      switch (colorName) {
        case "Cyan":
          color = "lightcyan";
          break;
        case "Azul":
          color = "lightblue";
          break;
        case "Coral":
          color = "lightcoral";
          break;
        case "Verde":
          color = "lightgreen";
          break;
        case "Verde marino":
          color = "lightseagreen";
          break;
      }
      req.session.user = {
        name: req.body.name,
        email: req.body.email,
        color,
        colorName,
        age: req.body.age,
        remember: req.body.remember,
      };

      let tiempoDeVidaCookie = new Date(Date.now() + 60000);

      if (req.body.remember) {
        res.cookie("userArmadoLogin", req.session.user, {
          expires: tiempoDeVidaCookie,
          httpOnly: true,
        });
      }

      res.locals.user = req.session.user;
      res.redirect("/");
    }
  },
  hola: (req, res) => {
    res.render("hola", {
      session: req.session,
    });
  },
  reset: (req, res) => {
    req.session.destroy();
    if(req.cookies.userArmadoLogin) {
      res.cookie("userArmadoLogin", "", {
        maxAge: -1
      });
    }

    res.redirect("/")
  },
};

module.exports = controller;

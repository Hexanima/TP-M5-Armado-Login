module.exports = (req, res, next) => {
    if(req.cookies.userArmadoLogin && !req.session.user) {
        req.session.user = req.cookies.userArmadoLogin;
        res.locals.user = req.session.user;
    }
    next()
}
var authorize = {
    isAuth: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return res.redirect('/')
        }
        next();
    },
    isNotAuth: (req, res, next) => {
        if (req.isAuthenticated()) {
            return res.redirect('/')
        }
        next();
    }
};

module.exports = authorize;
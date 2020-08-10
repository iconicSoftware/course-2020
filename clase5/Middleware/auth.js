exports.jwtAuthorization = (req, res, next) => {

    let {authorization} = req.headers;

    if(!authorization){
        res.status(403).send({
            status: "Forbidden",
            message: "No tienes acceso a este recurso"
        });
    }

    req.username = "Agu Decima";
    next();
}
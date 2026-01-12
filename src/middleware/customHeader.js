const customHeader = (req, res, next) => {

    try {
        const apiKey = req.headers.api_key;

        if (apiKey === "api-publica123") {
            next();
        } else {
            res.status(403);
            res.send({error: "API key incorrecta"});
        }
    } catch (e) {
        res.status(403)
        res.send("Error en el header personalizado");
    }
    console.log(req.body);
    next();
}

module.exports = customHeader;
const handleHttpError = (res, message = "BIGGGGG Error", code = 403) => {
    res.status(code);
    res.send({ error: message });
};

module.exports = { handleHttpError } ;
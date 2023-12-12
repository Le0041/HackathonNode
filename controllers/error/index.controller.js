const main = (req, res, req, next) => {
    console.error(err);
    res.status(err.httpStatus || 500).send({...err, status: 'error'})
};

export default main;
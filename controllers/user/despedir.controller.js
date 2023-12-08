const despedir = (req, res) => {
    res.send(`bye-bye ${req.nombre} from controller`);
}

export default despedir;
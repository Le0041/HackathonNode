const saludar = (req, res) => {
    res.send(`Hello ${req.nombre} from controller`);
}

export default saludar;
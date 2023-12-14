import validateSchema from '../../helpers/validate.helpers.js';
import bcrypt from 'bcrypt';
import schema from '../../schemas/user/register.schema.js';
import userService from '../../services/user/index.service.js';

const main = async (req, res, next) => {
    try {
    //recibir info en req que vamos a tener que validar
    await validateSchema(schema, req.body)
    const { email, username, password } = req.body;
    const registrationCode = randomstring.generate(30);

    const passwordEncoded = bcrypt.hash(password, 5);
    await userService.register(username, passwordEncoded, email, registrationCode);

    res.send
    ({ 
        status:"success",
        message: "User registrado correctamente",
     });
        
    } catch (error) {
        next(error);
    }
};

export default main;
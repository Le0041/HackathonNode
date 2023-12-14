import validateSchema from '../../helpers/validate.helpers.js';
import bcrypt from 'bcrypt';
import validateSchema from '../../helpers/validate.helpers.js';
import schema from '../../schemas/user/register.schema.js';
import userService from '../../services/user/index.service.js';
import randomstring from 'randomstring';

const main = async (req, res, next) => {
    try {
    //recibir info en req que vamos a tener que validar
    await validateSchema(schema, req.body)
    const { email, username, password } = req.body;

    const registrationCode = randomstring.generate(30);

    const passwordEncoded = await bcrypt.hash(password, 5);
    await userService.register(email, username, passwordEncoded, registrationCode);

    res.send
    ({ 
        status:"success",
        message: "Usuario registrado con éxito"
     });
        
    } catch (error) {
        next(error);
    }
};

export default main;
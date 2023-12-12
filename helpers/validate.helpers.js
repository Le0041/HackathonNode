import errors from './error.helpers.js';

const main = async (schema, body) => {
    try {
        await schema.validateAsync(body);   
    } catch (error) {
        console.error(error);
        errors.schemaValidationError();
    }
};

export default main;
import errors from './error.helpers.js';

const main = async (schema, body) => {
    try {
        await schema.validateAsync(body);   
    } catch (error) {
        console.error(error);
        errors.schemaValidationError(error.details[0]?.message);
    }
};

export default main;
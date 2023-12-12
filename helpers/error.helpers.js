
const conflictError = (msg, code = 'CONFLICT') => {
    let err = new Error(msg);
    err.code = code;
    err,httpStatus = 409;
    err.message = msg;
    throw err;
};

const notFoundError = (msg, code = 'NOT_FOUND') => {
    let err = new Error(msg);
    err.code = code;
    err.httpStatus = 404;
    err.message = msg;
    throw err;
};

const notAuthorizedError = (msg, code = 'NOT_AUTHORIZED') => {
    let err = new Error(msg);
    err.code = code;
    err.httpStatus = 401;
    err.message = msg;
    throw err;
};

const forbiddenError = (msg, code = 'FORBIDDEN') => {
    let err = new Error(msg);
    err.code = code;
    err.httpStatus = 403;
    err.message = msg;
    throw err;
}

const internalServerError = (msg, code = 'INTERNAL_SERVER_ERROR') => {
    let err = new Error(msg);
    err.code = code;
    err.httpStatus = 500;
    err.message = msg;
    throw err;
}

const sendEmailError = (msg, code = 'SEND_EMAIL_ERROR') => {
    internalServerError(msg, 'SEND_EMAIL_ERROR');
}
export default {
    conflictError,
    notFoundError,
    notAuthorizedError,
    forbiddenError,
    internalServerError,
    sendEmailError
}

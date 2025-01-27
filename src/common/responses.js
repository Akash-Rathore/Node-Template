// common/responses.js
import statusCodes from './statusCodes.js';

const responses = {
    success: (res, data, statusCode = statusCodes.OK) => {
        return res.status(statusCode).json({
            status: 'success',
            data,
        });
    },
    created: (res, data) => {
        return res.status(statusCodes.CREATED).json({
            status: 'success',
            data,
        });
    },
    noContent: (res) => {
        return res.status(statusCodes.NO_CONTENT).send();
    },
    badRequest: (res, message) => {
        return res.status(statusCodes.BAD_REQUEST).json({
            status: 'error',
            message,
        });
    },
    unauthorized: (res, message) => {
        return res.status(statusCodes.UNAUTHORIZED).json({
            status: 'error',
            message,
        });
    },
    forbidden: (res, message) => {
        return res.status(statusCodes.FORBIDDEN).json({
            status: 'error',
            message,
        });
    },
    notFound: (res, message) => {
        return res.status(statusCodes.NOT_FOUND).json({
            status: 'error',
            message,
        });
    },
    internalServerError: (res, message) => {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            message,
        });
    },
};

export default responses;

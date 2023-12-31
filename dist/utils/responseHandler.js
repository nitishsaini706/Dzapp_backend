"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.handleSuccess = void 0;
function handleSuccess(res, data, message) {
    const response = {
        success: true,
        data: data,
        message: message || 'Request successful',
    };
    res.status(200).json(response);
}
exports.handleSuccess = handleSuccess;
function handleError(res, error) {
    const response = {
        success: false,
        message: error.message || "Aborting Request",
    };
    res.status(500).json(response);
}
exports.handleError = handleError;

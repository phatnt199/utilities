"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    statusCode;
    messageCode;
    constructor(opts) {
        const { message, messageCode, statusCode = 400 } = opts;
        super(message);
        this.statusCode = statusCode;
        this.messageCode = messageCode;
    }
}
exports.ApplicationError = ApplicationError;
//# sourceMappingURL=base.model.js.map
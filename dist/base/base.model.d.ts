export interface IApplicationError {
}
export declare class ApplicationError extends Error {
    statusCode: number;
    messageCode?: string;
    constructor(opts: {
        statusCode?: number;
        messageCode?: string;
        message: string;
    });
}

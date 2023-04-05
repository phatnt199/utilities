export interface IApplicationError {
    statusCode?: number;
    messageCode?: string;
    message: string;
}
export declare class ApplicationError extends Error {
    statusCode: number;
    messageCode?: string;
    constructor(opts: IApplicationError);
}

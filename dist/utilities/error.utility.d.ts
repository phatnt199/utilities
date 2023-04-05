import { ApplicationError } from '../base/base.model';
export declare const getError: (opts: {
    statusCode?: number;
    messageCode?: string;
    message: string;
}) => ApplicationError;

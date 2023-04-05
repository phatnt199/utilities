export interface IApplicationError {
  statusCode?: number;
  messageCode?: string;
  message: string;
}

export class ApplicationError extends Error {
  statusCode: number;
  messageCode?: string;

  constructor(opts: IApplicationError) {
    const { message, messageCode, statusCode = 400 } = opts;
    super(message);

    this.statusCode = statusCode;
    this.messageCode = messageCode;
  }
}

export interface IApplicationError { }

export class ApplicationError extends Error {
  statusCode: number;
  messageCode?: string;

  constructor(opts: { statusCode?: number; messageCode?: string; message: string }) {
    const { message, messageCode, statusCode = 400 } = opts;
    super(message);

    this.statusCode = statusCode;
    this.messageCode = messageCode;
  }
}

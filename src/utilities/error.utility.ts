import { ApplicationError } from '@/base/base.model';

export const getError = (opts: { statusCode?: number; messageCode?: string; message: string }) => {
  const error = new ApplicationError(opts);
  return error;
};

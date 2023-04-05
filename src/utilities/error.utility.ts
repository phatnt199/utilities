import { ApplicationError, IApplicationError } from '@/base/base.model';

export const getError = (opts: IApplicationError) => {
  const error = new ApplicationError(opts);
  return error;
};

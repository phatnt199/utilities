import { stringify } from './utilities';

/* export * from './base';
export * from './helpers';
export * from './utilities'; */

const filter = {
  where: {},
  limit: 5,
  order: 'id ASC',
  skip: 0,
};

const stringified = stringify(filter);

console.log({
  stringified,
  decoded: decodeURI(stringified),
});

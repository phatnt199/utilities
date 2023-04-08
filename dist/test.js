"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
const filter = {
    where: {},
    limit: 5,
    order: 'id ASC',
    skip: 0,
};
const stringified = (0, utilities_1.stringify)(filter);
console.log({
    stringified,
    decoded: decodeURI(stringified),
});

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.dayjs = void 0;
const dayjs_1 = require("dayjs");
exports.dayjs = dayjs_1.default;
const customParseFormat_1 = require("dayjs/plugin/customParseFormat");
const timezone_1 = require("dayjs/plugin/timezone");
dayjs_1.default.extend(customParseFormat_1.default);
dayjs_1.default.extend(timezone_1.default);
const tz = (_a = process.env.APP_ENV_APPLICATION_TIMEZONE) !== null && _a !== void 0 ? _a : 'Asia/Ho_Chi_Minh';
dayjs_1.default.tz.setDefault(tz);
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.sleep = sleep;

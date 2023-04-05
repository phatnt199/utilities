"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.dayjs = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
exports.dayjs = dayjs_1.default;
const customParseFormat_1 = __importDefault(require("dayjs/plugin/customParseFormat"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
dayjs_1.default.extend(customParseFormat_1.default);
dayjs_1.default.extend(timezone_1.default);
const tz = process.env.APP_ENV_APPLICATION_TIMEZONE ?? 'Asia/Ho_Chi_Minh';
dayjs_1.default.tz.setDefault(tz);
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.sleep = sleep;
//# sourceMappingURL=date.utility.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorts = exports.ResultCodes = exports.Formatters = exports.App = void 0;
class App {
    static APPLICATION_NAME = process.env.APP_ENV_APPLICATION_NAME ?? 'PNT';
    static TIME_OFFSET = '+07:00';
    static DEFAULT_LOCALE = 'en.UTF-8';
}
exports.App = App;
class Formatters {
    static DATE_TIME = 'YYYY-MM-DD HH:mm:ss';
    static DATE_1 = 'YYYY-MM-DD';
    static DATE_2 = 'YYYYMMDD';
    static TIME_1 = 'HH:mm:ss';
    static TIME_2 = 'HHmmssSSS';
    static MONTH_1 = 'YYYYMM';
}
exports.Formatters = Formatters;
class ResultCodes {
    static RS_FAIL = 0;
    static RS_SUCCESS = 1;
    static RS_UNKNOWN_ERROR = -199;
}
exports.ResultCodes = ResultCodes;
class Sorts {
    static DESC = 'desc';
    static ASC = 'asc';
}
exports.Sorts = Sorts;
//# sourceMappingURL=constants.js.map
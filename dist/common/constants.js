"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorts = exports.ResultCodes = exports.Formatters = exports.App = void 0;
class App {
}
exports.App = App;
App.APPLICATION_NAME = (_a = process.env.APP_ENV_APPLICATION_NAME) !== null && _a !== void 0 ? _a : 'PNT';
App.TIME_OFFSET = '+07:00';
App.DEFAULT_LOCALE = 'en.UTF-8';
class Formatters {
}
exports.Formatters = Formatters;
Formatters.DATE_TIME = 'YYYY-MM-DD HH:mm:ss';
Formatters.DATE_1 = 'YYYY-MM-DD';
Formatters.DATE_2 = 'YYYYMMDD';
Formatters.TIME_1 = 'HH:mm:ss';
Formatters.TIME_2 = 'HHmmssSSS';
Formatters.MONTH_1 = 'YYYYMM';
class ResultCodes {
}
exports.ResultCodes = ResultCodes;
ResultCodes.RS_FAIL = 0;
ResultCodes.RS_SUCCESS = 1;
ResultCodes.RS_UNKNOWN_ERROR = -199;
class Sorts {
}
exports.Sorts = Sorts;
Sorts.DESC = 'desc';
Sorts.ASC = 'asc';
//# sourceMappingURL=constants.js.map
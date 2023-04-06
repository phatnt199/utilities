export class App {
  static readonly TIME_OFFSET = '+07:00';
  static readonly DEFAULT_LOCALE = 'en.UTF-8';
}

export class Formatters {
  static readonly DATE_TIME = 'YYYY-MM-DD HH:mm:ss';
  static readonly DATE_1 = 'YYYY-MM-DD';
  static readonly DATE_2 = 'YYYYMMDD';
  static readonly TIME_1 = 'HH:mm:ss';
  static readonly TIME_2 = 'HHmmssSSS';
  static readonly MONTH_1 = 'YYYYMM';
}

export class ResultCodes {
  static readonly RS_FAIL = 0;
  static readonly RS_SUCCESS = 1;
  static readonly RS_UNKNOWN_ERROR = -199;
}

export class Sorts {
  static readonly DESC = 'desc';
  static readonly ASC = 'asc';
}

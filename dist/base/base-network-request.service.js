"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNetworkRequest = void 0;
const network_helper_1 = require("../helpers/network.helper");
const utilities_1 = require("../utilities");
const get_1 = __importDefault(require("lodash/get"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
class BaseNetworkRequest {
    baseUrl;
    networkService;
    constructor(opts) {
        const { name, networkOptions } = opts;
        const { headers = {}, ...rest } = networkOptions;
        const requestConfigs = {
            ...rest,
            withCredentials: true,
            timeout: 60 * 1000,
            validateStatus: (status) => {
                return status < 500;
            },
            headers,
        };
        const defaultHeader = (0, get_1.default)(requestConfigs, "headers['Content-Type']");
        if (!defaultHeader) {
            requestConfigs.headers['Content-Type'] = 'application/json; charset=utf-8';
        }
        this.baseUrl = networkOptions?.baseURL ?? '';
        this.networkService = new network_helper_1.NetworkHelper({ name, requestConfigs });
    }
    getRequestUrl(opts) {
        let baseUrl = opts?.baseUrl ?? this.baseUrl ?? '';
        const paths = opts?.paths ?? [];
        if (!baseUrl || (0, isEmpty_1.default)(baseUrl)) {
            throw (0, utilities_1.getError)({
                statusCode: 500,
                message: '[getRequestUrl] Invalid configuration for third party request base url!',
            });
        }
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1); // Remove / at the end
        }
        const joined = paths
            .map((path) => {
            if (!path.startsWith('/')) {
                path = `/${path}`; // Add / to the start of url path
            }
            return path;
        })
            .join('');
        return `${baseUrl ?? this.baseUrl}${joined}`;
    }
}
exports.BaseNetworkRequest = BaseNetworkRequest;
//# sourceMappingURL=base-network-request.service.js.map
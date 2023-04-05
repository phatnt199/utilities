"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkHelper = void 0;
const axios_1 = __importDefault(require("axios"));
const utilities_1 = require("../utilities");
const HTTP = 'http';
const HTTPS = 'https';
const defaultLogger = {
    info: (message, args) => {
        console.log(message, args);
    },
    error: (message, args) => {
        console.error(message, args);
    }
};
// -------------------------------------------------------------
class NetworkHelper {
    name;
    worker;
    logger;
    constructor(opts) {
        const { name, requestConfigs } = opts;
        this.logger = opts.logger || defaultLogger;
        this.name = name;
        this.logger.info(` Creating new network request worker instance! Name: ${this.name}`);
        this.worker = axios_1.default.create({
            ...requestConfigs,
        });
    }
    getProtocol(url) {
        return url.startsWith('http:') ? HTTP : HTTPS;
    }
    // -------------------------------------------------------------
    // SEND REQUEST
    // -------------------------------------------------------------
    async send(opts, logger) {
        const t = new Date().getTime();
        const { url, method = 'get', params, body, configs } = opts;
        const props = {
            url,
            method,
            params,
            data: body,
            paramsSerializer: {
                encode: (p) => (0, utilities_1.stringify)(p),
            },
            ...configs,
        };
        this.logger.info(`[send] URL: ${url} | Props: ${JSON.stringify(props)}`);
        const response = await this.worker.request(props);
        logger?.info(`[network]][send] Took: ${new Date().getTime() - t} ms!`);
        return response;
    }
    // -------------------------------------------------------------
    // GET REQUEST
    // -------------------------------------------------------------
    async get(opts) {
        const { url, params, configs, ...rest } = opts;
        const response = await this.send({ ...rest, url, method: 'get', params, configs });
        return response;
    }
    // -------------------------------------------------------------
    // POST REQUEST
    // -------------------------------------------------------------
    async post(opts) {
        const { url, body, configs, ...rest } = opts;
        const response = await this.send({ ...rest, url, method: 'post', body, configs });
        return response;
    }
    // -------------------------------------------------------------
    async put(opts) {
        const { url, body, configs, ...rest } = opts;
        const response = await this.send({ ...rest, url, method: 'put', body, configs, ...rest });
        return response;
    }
    // -------------------------------------------------------------
    async patch(opts) {
        const { url, body, configs, ...rest } = opts;
        const response = await this.send({ ...rest, url, method: 'patch', body, configs });
        return response;
    }
    // -------------------------------------------------------------
    async delete(opts) {
        const { url, configs, ...rest } = opts;
        const response = await this.send({ ...rest, url, method: 'delete', configs });
        return response;
    }
}
exports.NetworkHelper = NetworkHelper;
//# sourceMappingURL=network.helper.js.map
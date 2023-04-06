"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiQueue = exports.Queue = void 0;
const isEmpty_1 = require("lodash/isEmpty");
const omit_1 = require("lodash/omit");
class Queue {
    constructor(opts) {
        const { identifier, onDataEnqueue, onDataDequeue } = opts;
        this.identifier = identifier;
        this.onDataEnqueue = onDataEnqueue;
        this.onDataDequeue = onDataDequeue;
        this.storage = [];
    }
    enqueue(value) {
        var _a;
        if (!this.storage) {
            this.storage = [];
        }
        this.storage.push(value);
        if (value && !(0, isEmpty_1.default)(value)) {
            (_a = this.onDataEnqueue) === null || _a === void 0 ? void 0 : _a.call(this, this.identifier, value);
        }
    }
    dequeue() {
        var _a, _b;
        const value = (_a = this.storage) === null || _a === void 0 ? void 0 : _a.shift();
        if (value && !(0, isEmpty_1.default)(value)) {
            (_b = this.onDataDequeue) === null || _b === void 0 ? void 0 : _b.call(this, this.identifier, value);
        }
        return value;
    }
    getElementAt(position = 0) {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a[position];
    }
}
exports.Queue = Queue;
class MultiQueue {
    constructor(opts) {
        const { onDataEnqueue, onDataDequeue, } = opts;
        this.onDataEnqueue = onDataEnqueue;
        this.onDataDequeue = onDataDequeue;
        this.storage = {};
    }
    enqueue(identifier, value) {
        var _a;
        if (!this.storage[identifier]) {
            this.storage[identifier] = new Queue({ identifier });
        }
        this.storage[identifier].enqueue(value);
        if (value && !(0, isEmpty_1.default)(value)) {
            (_a = this.onDataEnqueue) === null || _a === void 0 ? void 0 : _a.call(this, identifier, value);
        }
    }
    dequeue(identifier) {
        var _a, _b;
        const value = (_a = this.storage[identifier]) === null || _a === void 0 ? void 0 : _a.dequeue();
        if (value && !(0, isEmpty_1.default)(value)) {
            (_b = this.onDataDequeue) === null || _b === void 0 ? void 0 : _b.call(this, identifier, value);
        }
        return value;
    }
    getElementAt(identifier, position = 0) {
        return this.storage[identifier].getElementAt(position);
    }
    getCurrentData(identifier) {
        var _a;
        return (_a = this.storage[identifier]) === null || _a === void 0 ? void 0 : _a.getElementAt(0);
    }
    getQueue(identifier) {
        return this.storage[identifier];
    }
    removeQueue(queue) {
        this.storage = (0, omit_1.default)(this.storage, [queue]);
    }
    mapData() {
        return this.storage;
    }
}
exports.MultiQueue = MultiQueue;

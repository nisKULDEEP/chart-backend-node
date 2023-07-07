"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChartById = exports.deleteChart = exports.updateChart = exports.getAllChart = exports.createChart = void 0;
var chartModel_1 = __importDefault(require("../models/chartModel"));
var createChart = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, data, chart, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, data = _a.data;
                if (!name || !data) {
                    return [2 /*return*/, res.status(400).json({
                            status: 'failed',
                            message: 'Name and data are required.',
                        })];
                }
                return [4 /*yield*/, chartModel_1.default.create({ name: name, data: data })];
            case 1:
                chart = _b.sent();
                res.status(201).json({
                    status: 'success',
                    message: 'Chart created',
                    data: chart,
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error('Error creating chart:', error_1);
                res.status(500).json({
                    status: 'failed',
                    message: 'Failed to create chart',
                    error: error_1.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createChart = createChart;
var getAllChart = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, skip, charts, totalCount, error_2;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                page = parseInt((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
                limit = parseInt((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.limit) || 10;
                skip = (page - 1) * limit;
                return [4 /*yield*/, chartModel_1.default.find().skip(skip).limit(limit)];
            case 1:
                charts = _c.sent();
                return [4 /*yield*/, chartModel_1.default.count()];
            case 2:
                totalCount = _c.sent();
                res.status(200).json({
                    status: 'success',
                    message: 'All charts retrieved',
                    data: charts,
                    dataCount: charts.length,
                    totalCount: totalCount,
                    page: page
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                console.error('Error retrieving charts:', error_2);
                res.status(500).json({
                    status: 'failed',
                    message: 'Failed to retrieve charts',
                    error: error_2.message,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllChart = getAllChart;
var updateChart = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, data, updatedChart, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name = _a.name, data = _a.data;
                if (!name || !data) {
                    return [2 /*return*/, res.status(400).json({
                            status: 'failed',
                            message: 'Name and data are required.',
                        })];
                }
                return [4 /*yield*/, chartModel_1.default.findByIdAndUpdate(id, { name: name, data: data }, { new: true })];
            case 1:
                updatedChart = _b.sent();
                if (!updatedChart) {
                    return [2 /*return*/, res.status(404).json({
                            status: 'failed',
                            message: 'Chart not found.',
                        })];
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Chart updated',
                    data: updatedChart,
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error('Error updating chart:', error_3);
                res.status(500).json({
                    status: 'failed',
                    message: 'Failed to update chart',
                    error: error_3.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateChart = updateChart;
var getChartById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, chart, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, chartModel_1.default.findById(id)];
            case 1:
                chart = _a.sent();
                if (!chart) {
                    return [2 /*return*/, res.status(404).json({
                            status: 'failed',
                            message: 'Chart not found.',
                        })];
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Chart retrieved',
                    data: chart,
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error('Error retrieving chart:', error_4);
                res.status(500).json({
                    status: 'failed',
                    message: 'Failed to retrieve chart',
                    error: error_4.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getChartById = getChartById;
var deleteChart = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedChart, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, chartModel_1.default.findByIdAndDelete(id)];
            case 1:
                deletedChart = _a.sent();
                if (!deletedChart) {
                    return [2 /*return*/, res.status(404).json({
                            status: 'failed',
                            message: 'Chart not found.',
                        })];
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Chart deleted',
                    data: deletedChart,
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error('Error deleting chart:', error_5);
                res.status(500).json({
                    status: 'failed',
                    message: 'Failed to delete chart',
                    error: error_5.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteChart = deleteChart;

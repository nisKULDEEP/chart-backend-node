"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var chart_1 = require("../controllers/chart");
var router = express_1.default.Router();
// GET /charts - Get all charts
/**
 * @swagger
 * tags:
 *   name: Charts
 *   description: Chart operations
 */
/**
 * @swagger
 * /api/v1/chart/charts:
 *   get:
 *     summary: Get all charts
 *     description: Retrieve a list of charts
 *     tags: [Charts]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chart'
 */
router.get('/', chart_1.getAllChart);
// POST /charts - Create a new chart
/**
 * @swagger
 * /api/v1/chart/charts:
 *   post:
 *     summary: Create a new chart
 *     description: Create a new chart
 *     tags: [Charts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chart'
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chart'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', chart_1.createChart);
// GET /charts/:id - Get a chart by ID
router.get('/:id', chart_1.getChartById);
// PUT /charts/:id - Update a chart by ID
router.put('/:id', chart_1.updateChart);
// DELETE /charts/:id - Delete a chart by ID
router.delete('/:id', chart_1.deleteChart);
module.exports = router;

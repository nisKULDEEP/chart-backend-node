import express from 'express';
import {createChart, getAllChart, updateChart, deleteChart, getChartById} from '../controllers/chart'
const router = express.Router();

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
router.get('/', getAllChart);

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
router.post('/', createChart);

// GET /charts/:id - Get a chart by ID
router.get('/:id', getChartById);

// PUT /charts/:id - Update a chart by ID
router.put('/:id', updateChart);

// DELETE /charts/:id - Delete a chart by ID
router.delete('/:id', deleteChart);


module.exports = router;
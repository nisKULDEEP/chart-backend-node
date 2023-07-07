import chartModel from '../models/chartModel';
import { NextFunction, Request, Response} from "express";
const createChart = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { name, data } = req.body;

        if (!name || !data) {
            return res.status(400).json({
                status: 'failed',
                message: 'Name and data are required.',
            });
        }

        const chart = await chartModel.create({ name, data });

        res.status(201).json({
            status: 'success',
            message: 'Chart created',
            data: chart,
        });
    } catch (error:any) {
        console.error('Error creating chart:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to create chart',
            error: error.message,
        });
    }
}

const getAllChart = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const page:number =parseInt(<string>req ?.query?.page) || 1;
        const limit:number = parseInt(<string>req?.query?.limit) || 10;
        const skip:number = (page - 1) * limit;

        const charts = await chartModel.find().skip(skip).limit(limit);
        const totalCount = await chartModel.count();

        res.status(200).json({
            status: 'success',
            message: 'All charts retrieved',
            data: charts,
            dataCount: charts.length,
            totalCount,
            page
        });
    } catch (error:any) {
        console.error('Error retrieving charts:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to retrieve charts',
            error: error.message,
        });
    }
}

const updateChart =  async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params;
        const { name, data } = req.body;

        if (!name || !data) {
            return res.status(400).json({
                status: 'failed',
                message: 'Name and data are required.',
            });
        }

        const updatedChart = await chartModel.findByIdAndUpdate(
            id,
            { name, data },
            { new: true }
        );

        if (!updatedChart) {
            return res.status(404).json({
                status: 'failed',
                message: 'Chart not found.',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Chart updated',
            data: updatedChart,
        });
    } catch (error: any) {
        console.error('Error updating chart:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to update chart',
            error: error.message,
        });
    }

}

const getChartById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const chart = await chartModel.findById(id);

        if (!chart) {
            return res.status(404).json({
                status: 'failed',
                message: 'Chart not found.',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Chart retrieved',
            data: chart,
        });
    } catch (error: any) {
        console.error('Error retrieving chart:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to retrieve chart',
            error: error.message,
        });
    }
}

const deleteChart = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params;

        const deletedChart = await chartModel.findByIdAndDelete(id);

        if (!deletedChart) {
            return res.status(404).json({
                status: 'failed',
                message: 'Chart not found.',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Chart deleted',
            data: deletedChart,
        });
    } catch (error: any) {
        console.error('Error deleting chart:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to delete chart',
            error: error.message,
        });
    }
}

export {createChart, getAllChart, updateChart, deleteChart,getChartById}
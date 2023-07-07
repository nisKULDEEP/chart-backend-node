import mongoose from 'mongoose';

const chartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
        },
        data: {
            type: Array,
            required: [true, 'Data is required.'],
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Chart', chartSchema);

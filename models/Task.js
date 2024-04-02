const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
        project_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        assigned_to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', TaskSchema);
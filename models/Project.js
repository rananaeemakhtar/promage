const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
        name: {
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
        managers: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }],
        },
        tasks: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task',
            }],
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Project', ProjectSchema);
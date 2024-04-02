const mongoose = require('mongoose');

const EventSubscriptionSchema = new mongoose.Schema({
        event_type: {
            type: String, // Ex: PROJECT_CREATED, PROJECT_UPDATED, PROJECT_DELETED
            required: true,
        },
        request_type: {
            type: String, // Ex: POST, GET
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('EventSubscription', EventSubscriptionSchema);
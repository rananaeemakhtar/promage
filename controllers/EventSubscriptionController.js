const { Success, ServerError } = require("../utils/Responses");
const EventSubscription = require("../models/EventSubscription");

var self = (module.exports = {

    store(req, res){
        try {
            const { url, event_type, request_type } = req.body;
            
            const event_client = new EventSubscription({
                url,
                event_type,
                request_type
            });

            event_client.save((error, event_client) => {
                if(error) {
                    return ServerError(res, error.message);
                }
             
                return Success(res, event_client, "Client Registered for event successfully");
            });
        } catch (e) {
            return ServerError(res, e.message);
        }
    },

});
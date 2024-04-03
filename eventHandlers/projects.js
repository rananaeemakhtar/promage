const EventSubscription = require("../models/EventSubscription");

var self = (module.exports = {
    async created(project) {
        const events = await EventSubscription.find({ event_type: "PROJECT_CREATED" });
        const queue = []; 

        events.forEach(async event => {
            // call the url with the project data
            queue.push(event);
        });

        setInterval(() => {
            if (queue.length > 0) {
                const event = queue.shift();

                try {
                    fetch(event.url, {
                        method: event.request_type,
                        body: JSON.stringify(project),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                } catch (e) {
                    console.log(e.message);
                }
            }
        }, 1000);
    }
});
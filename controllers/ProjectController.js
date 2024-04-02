const Project = require("../models/Project");
const { Success, ServerError } = require("../utils/Responses");
const { created } = require("../eventHandlers/projects");

var self = (module.exports = {

    store(req, res){
        try {
            const { name, start_date, end_date, description } = req.body;

            const project = new Project({
                name,
                start_date: new Date(start_date),
                end_date: new Date(end_date),
                description
            });

            project.save((error, project) => {
                if(error) {
                    return ServerError(res, error.message);
                }
                
                created(project)                
                return Success(res, project, "Project created successfully");
            });
        } catch (e) {
            return ServerError(res, e.message);
        }
    },

});
const express = require('express');
const router = express.Router();
const ProjectController =  require("../controllers/ProjectController");


router.post('/', ProjectController.store);


module.exports = router;
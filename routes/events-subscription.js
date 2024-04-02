const express = require('express');
const router = express.Router();
const EventSubscriptionController =  require("../controllers/EventSubscriptionController");


router.post('/', EventSubscriptionController.store);


module.exports = router;
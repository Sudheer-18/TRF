const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/restController');

// Thunder Client lo POST cheyadaniki
router.post('/add', resumeController.addResume);

// React frontend lo fetch cheyadaniki
router.get('/view', resumeController.getResume);

module.exports = router;
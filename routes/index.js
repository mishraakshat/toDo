const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

//----------HOME Controller ---------------------//
router.get('/',homeController.home);
router.post('/data',homeController.data);
router.post('/delete', homeController.delete);
module.exports = router;
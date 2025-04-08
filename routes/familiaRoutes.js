const express = require('express');
const router = express.Router();

const familiaController=require('../controllers/familiaController.js');

router.get('/mensaje',familiaController.getMessage);

module.exports=router;

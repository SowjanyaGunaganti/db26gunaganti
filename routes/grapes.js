var express = require('express'); 
const grapes_controlers= require('../controllers/grapes'); 
var router = express.Router(); 
 
/* GET grapess */ 
router.get('/', grapes_controlers.grapes_view_all_Page ); 
module.exports = router; 
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var grapes_controller = require('../controllers/grapes'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// grapes ROUTES /// 
 
// POST request for creating a grapes.  
router.post('/grapes', grapes_controller.grapes_create_post); 
 
// DELETE request to delete grapes. 
router.delete('/grapes/:id', grapes_controller.grapes_delete); 
 
// PUT request to update grapes. 
router.put('/grapes/:id', 
grapes_controller.grapes_update_put); 
 
// GET request for one grapes. 
router.get('/grapes/:id', grapes_controller.grapes_detail); 
 
// GET request for list of all grapes items. 
router.get('/grapes', grapes_controller.grapes_list); 
 
module.exports = router;
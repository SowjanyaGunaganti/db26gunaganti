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

/* GET detail grapes page */ 
router.get('/detail', grapes_controller.grapes_view_one_Page); 

/* GET create grapes page */ 
router.get('/create', grapes_controller.grapes_create_Page);

/* GET create update page */ 
router.get('/update', grapes_controller.grapes_update_Page); 

/* GET create grapes page */ 
router.get('/delete', grapes_controller.grapes_delete_Page); 
 
module.exports = router;
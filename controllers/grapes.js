var grapes = require('../models/grapes'); 
 
// List of all grapess 
exports.grapes_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes list'); 
}; 
 
// for a specific grapes. 
exports.grapes_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes detail: ' + req.params.id); 
}; 
 
// Handle grapes create on POST. 
exports.grapes_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes create POST'); 
}; 
 
// Handle grapes delete form on DELETE. 
exports.grapes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes delete DELETE ' + req.params.id); 
}; 
 
// Handle grapes update form on PUT. 
exports.grapes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes update PUT' + req.params.id); 
};

// List of all grapess 
exports.grapes_list = async function(req, res) { 
    try{ 
        thegrapess = await grapes.find(); 
        res.send(thegrapess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.grapes_view_all_Page = async function(req, res) { 
    try{ 
        thegrapess = await grapes.find(); 
        res.render('grapes', { title: 'grapes Search Results', results: thegrapess }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle grapes create on POST. 
exports.grapes_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new grapes(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"grapes_type":"goat", "cost":12, "size":"large"} 
    document.type = req.body.type; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
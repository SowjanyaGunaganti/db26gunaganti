var grapes = require('../models/grapes'); 
 
// List of all grapess 
exports.grapes_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: grapes list'); 
}; 
 
// for a specific grapes. 
exports.grapes_detail = async function(req, res) { 
    grapes.log("detail"  + req.params.id) 
    try { 
        result = await grapes.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
    grapes.log(req.body) 
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
exports.grapes_update_put = async function(req, res) { 
    grapes.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await grapes.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.type)  
               toUpdate.type = req.body.type; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        grapes.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle grapes delete on DELETE. 
exports.grapes_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await grapes.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.grapes_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await grapes.findById( req.query.id) 
        res.render('grapesdetail',  
{ title: 'grapes Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a grapes. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.grapes_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('grapescreate', { title: 'grapes Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a grapes. 
// query provides the id 
exports.grapes_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await grapes.findById(req.query.id) 
        res.render('grapesupdate', { title: 'grapes Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.grapes_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await grapes.findById(req.query.id) 
        res.render('grapesdelete', { title: 'grapes Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
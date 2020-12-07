  
/* DEPENDECIES */
const { Router } = require(`express`);
const fetch = require('node-fetch');
const Request = require('../models/Requestlog');

// APP 
const router = Router();

router.get("/search/shows/:search", (req, res) => {
    
    const search = req.params.search;
    const date = new Date();
    const ip = req.ip;

    const query = { search , date , ip };
    
    newRequest( query )
 
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${search}`)
    .then(response => response.json())
    .then(jsonResponse => res.status(200).send(jsonResponse) )
    .catch(error => res.status(404).send({error: "Movie not found"}) )  
    
});


newRequest =  function ( query ) {
    const newQuery = new Request(query);
   
     newQuery.save()
    .then( query => { console.log("It´s ok") } )
    .catch( error=> {console.log("It´s bad") } )
}


module.exports = router
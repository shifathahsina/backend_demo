const express=require('express');
const route = express.Router();
route.get('/',(req,res)=>{
    res.send("User infromation");
});
route.get('/newuser',(req,res)=>{
    res.send("New user added");
});
route.get('/deleteuser',(req,res)=>{
    res.send("User deleted");
});

route.route('/:name')
      .get((req,res)=>{
        console.log(req.usery);
    res.send(`The name ${req.params.name} is added`);
})
      .put((req,res)=>{
     res.send(`The name ${req.params.name} is created`);
})
      .delete((req,res)=>{
    res.send(`The name ${req.params.name} is deleted`);
})

const users = [{name:"raja"},{name:"rani"},{name:"sepoy"}];
route.param('id', (req, res, next, id) => {
    console.log(`ID parameter received: ${id}`);
    req.usery = users[id]; 
    next(); 
});



module.exports = route;
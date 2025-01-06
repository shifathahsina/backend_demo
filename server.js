  const  express=require ('express');
  const  app=express();
  app.set('view engine','ejs');
  app.get('/',(req,res)=>{
    // console.log("Hi");
    // res.status(500).send("Error occured");
    // res.json({Express :"Learning express"})
    // res.status(200).send({error:"Error message"});
    // res.render("index",{text: "Shifa"});
    res.send("Hello world");
  });
  
  const userRoute=require(('./routes/user'));
  app.use('/user',userRoute);

  app.listen('3000');
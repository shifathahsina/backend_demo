import users from '../model/usermodel.js';
export const create = async(req,res) => {
    try{
        let userdata = new users(req.body);
        const {email} = userdata; 
        const userExist = await users.findOne({email});
        if(userExist)
        {
            return res.status(400).json({message:"User already exists"})
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser})
    }
    catch(error)
    {
        res.status(500).json({error:"Internal server error"});
    }
};
export const fetch = async (req, res) => {
    try{
        const user=await users.find();
        if(user.length === 0)
        {
            return res.status(404).json({message:"No users found"});
        }
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }   
};
export const fetchprt = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await users.findById(id); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });  
        }
        res.status(200).json(user);  // Return the user directly
    } catch (error) {
        console.error(error);  // Optional: Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export const update = async (req, res) => {
    try{
        const id=req.params.id;
        const userExist =  await users.findOne({_id:id});
        if(!userExist)
        {
            return res.status(404).json({message:"User not found"});
        }
        const updateUser = await users.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }   
};
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await users.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }
        await users.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);  
        res.status(500).json({ error: "Internal server error" });
    }
};



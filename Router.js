const express = require('express');
const userRouter = express();
const model = require('./model');
userRouter.post('/create-user',async(res,req)=>{
    try{
        const{mail,userName,password} = req.body
        const findOne = await model.findOne({mail});
    if(findOne){
        res.send(400).json({message:'User already exists'})
    }
    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
            return res.status(500).json({ message: "Error hashing password" });
        }

        await model.create({
            userName:userName,
            mail: mail,
            password: hash,
           
        });

        res.status(201).json({ message: "User created successfully" });
    });
    }catch(err){
        res.status(500).json({message:'Internal Server Error'});
    }
})

userRouter.post('/login',async(res,req)=>{
    try{
        const{mail,userName,password} = req.body;
const userFindOne = await model.findOne({mail});
if(!user){
res.send(404).json({message:'User not found'})
}    
if(!userName || !mail || !password){
    res.status(400).json({message:'fill out all fields'})
}
bcrypt.compare(password, check.password, function (err, result) {
    if (err) {
        return res.status(400).json({ message: "Invalid bcrypt compare" });
    }
    if (result) {
        jwt.sign({ mail: mail }, secret, (err, token) => {
            if (err) {
                return res.status(400).json({ message: "Invalid jwt" });
            }
            res.setHeader('Authorization', `Bearer ${token}`);
            console.log(token);
            res.status(200).json({ token: token });
        });
    }
}
    )
}catch(err){
res.status(500).json({message:'Internal Server Error'});
}

})
module.export = {userRouter};


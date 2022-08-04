const { Router } = require("express");
const UserModel = require("../models/User.model");
const sha256 = require("sha256");

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.send("Get from auth router");
})

authRouter.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    const hash = sha256(password);
    const user = await new UserModel({ email, name, password: hash });
    await user.save();
    res.send(user);
})

authRouter.post("/login",async (req,res)=>{
    // 
})


module.exports = authRouter;
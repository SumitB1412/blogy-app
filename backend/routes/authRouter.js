const { Router } = require("express");
const UserModel = require("../models/User.model");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");
require('dotenv').config();

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

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const hash = sha256(password);
    const user = await UserModel.findOne({ email, password: hash });
    if (!user) {
        return res.status(401).send("Wrong credentials");
    }
    const token = jwt.sign({ name: user.name, email: email.username, id: user._id }, process.env.SECRET);
    res.send({ message: "Login Success", token: token });
})

module.exports = authRouter;
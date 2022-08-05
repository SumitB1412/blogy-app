const { Router } = require("express");
const UserModel = require("../models/User.model");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");

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
    const token = jwt.sign({ name: user.name, email: email.username, id: user._id }, "SOMEPASSWORD")
    res.send({ message: "Login Success", token: token });
})


// app.get("/profile/:id", async (req, res) => {
//     const { id } = req.params;
//     const token = req.headers["authorization"].split(' ')[1];
//     try {
//         const verification = jwt.verify(token, "SECRET");
//         if (verification) {
//             const user = await UserModel.findOne({ _id: id })
//             res.send({ message: "Profile page", ...user })
//         }
//         else {
//             res.send("Unauthorized user");
//         }
//     }
//     catch (err) { res.send(err) }
// })


module.exports = authRouter;
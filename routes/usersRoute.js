const express = require('express')
const router = express.Router()
const User = require("../models/user")


router.post("/signup", async (req, res) => {
    const newuser = new User({ name: req.body.username, username: req.body.username, email: req.body.email, password: req.body.password })
    try {
        const user = await newuser.save()
        res.send("user Registered successufully")
    } catch (error) {
        return res.status(400).json({ error })
    }
})

router.post("/login", async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            const temp = {
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
                name: user.name,
                profilePic: user.profilePic,
                address: user.address,
                gender: user.gender,
                mobileNumber: user.mobileNumber,
                isManager: user.isManager
            }

            res.send(temp)
        } else {
            return res.status(400).json({ message: "Login failed" })
        }

    } catch (error) {
        return res.status(400).json({ error })
    }


})

router.get('/getallusers', async (req, res) => {
    try {
        const allusers = await User.find()
        res.send(allusers)
    } catch (error) {
        return res.status(400).json({ error })
    }
})

// update profile route 

router.post('/update', async (req, res) => {
    try {
        const { _id, name, username, profilePic, email, address, gender, mobileNumber } = req.body

        if (!_id) {
            return res.status(400).json({ success: false, message: "User is not registered" })
        }
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {name,
            username,
            profilePic,
            email,
            address,
            gender,
            mobileNumber},
            { new: true }
        )

        res.json({ success: true, message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }



})


module.exports = router
const express = require("express");

const router = express.Router();

const User = require("../models/User");



// REGISTER

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } =
      req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const newUser = new User({

      name,
      email,
      password,

    });

    await newUser.save();

    res.status(201).json({
      message: "Registration Successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Registration Failed",
    });

  }

});



// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } =
      req.body;

    const user = await User.findOne({

      email,
      password,

    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid Credentials",
      });

    }

    res.json({

      message: "Login Successful",
      email: user.email,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login Failed",
    });

  }

});

module.exports = router;
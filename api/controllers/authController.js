const userModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
   try {
      const { fullname, email, phone, password } = req.body;
      //validation
      if (!fullname || !email || !password || !phone) {
         return res.status(400).send({
            success: false,
            message: "Please Provide All Fields",
         });
      }
      // chekc user
      const exisiting = await userModel.findOne({ email });
      if (exisiting) {
         return res.status(400).send({
            success: false,
            message: "Email Already Registerd, Please Login!",
         });
      }
      //hashing password
      var salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //create new user
      const user = await userModel.create({
         fullname,
         email,
         phone,
         password: hashedPassword,
      });
      res.status(201).send({
         success: true,
         message: "Successfully Registered",
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error In Register API",
         error,
      });
   }
};

module.exports = { registerController };
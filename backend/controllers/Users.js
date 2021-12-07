import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';
import _ from 'lodash';
import db from "../config/database.js";
//const SECRET = "asbadbbdbbh7";
import session from 'express-session'; 

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        //console.log(users.every(user => user instanceof User)); // true
        //console.log("All users: ", JSON.stringify(users));
        //res.json("Test!");
        res.json(users);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const register = async (req, res) => {
    try {
        const {first_name, last_name, email, password} = req.body; 
        // Check if email already exist 

        const isEmailExist = await User.findOne({where: {email: email}}).catch(
            (err) => {
                console.log("Error: ", err)
            }); 
        if(isEmailExist)
        {
            return res.status(202).json({message: "Email has already been taken."})
        }
        bcrypt.hash(password, 10).then((hash) => {
            User.create({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hash,
            });
            res.json("User created!");
        });
        
        // const newUser = new User({first_name, last_name, email, password});
        // const savedUser = await newUser.save().catch((err) => {
        //     console.log("Error: ", err);
        //     return res.status(500).json({message: "Cannot register user at the moment"})
        // })
        // if(savedUser)
        // {
        //     res.json({message: "Your registration has been successfully completed"})
        // }

    } catch (e)
    {
        res.status(500).send(e.message); 
    }
}

export const login = async (req, res) => {
    try 
    {
        const { email, password } = req.body;

<<<<<<< HEAD
        req.session.email = user.email; 
        req.session.first_name = user.first_name; 
        req.session.password = user.password; 

        console.log(req.session.email); 
        res.redirect('/home');
        // res.status(201).json({message: "Login successful!"});  
=======
        const user = await User.findOne({ where: { email: email } });
      
        if (!user) res.json({ error: "User Doesn't Exist" });
      
        bcrypt.compare(password, user.password).then((match) => {
          if (!match) res.json({ error: "Wrong Username And Password Combination" });
      
          res.json("Successfully logged in");
        });
>>>>>>> 27bf92955ad37c8b39783e069cc38f8c2000cf9e
    } catch (e)
    {
        res.status(500).send(e.message); 
    }
}
 
export const getLogin = async(req, res) => {
    if(req.session.email)
    {
        res.send({loggedIn: true, email: req.session.email});
    } else {
        res.send({loggedIn: false, });
    }
}
export const updatePassword = async (req, res) => {
    try { 
        // Check if user did not type in the correct old password
        if(req.body.oldPassword != req.session.password)
        {
            console.log("Incorrect password!");
            return res.status(202).json({message: "The old password is incorrect! Please try again."});
        }
        
        // Check if new password does not match confirm password 
        if(req.body.newPassword != req.body.confirmPassword)
        {
            console.log("New password does not match with confirm password!");
            return res.status(202).json({message: "The new password does not match with confirm password! Please try again."});
        }
        await User.update({ password: req.body.newPassword}, {
            where: {
                email: req.session.email 
            }
        });
        console.log("Update successful"); 

    } catch (e)
    {
        res.status(500).send(e.message); 
    }
}
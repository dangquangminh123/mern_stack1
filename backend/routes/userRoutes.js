import express from 'express'
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken, isAuth } from '../utils.js';
const userRouter = express.Router();

userRouter.post('/login', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    // console.log(user)
    if(user) {
      const isValidPass = await bcrypt.compare(req.body.password, user.password);
      if(isValidPass){
        const  {password, ...others} = user._doc;
        const token = generateToken(others);
        return res.status(200).json({
          ...others, token
        })
      }
      else{
        return res.status(401).json({
          msg: "Invalid password"
        })
      }
    }
    else{
      return res.status(404).send({message: 'User not found'});
    }
   
}));

userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    })
);

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    const confirmpassword = req.body.password;
    if (confirmpassword) {
      user.password = bcrypt.hashSync(confirmpassword, 8);
    }

    // for update user when in inputs add new info
    const updatedUser = await user.save();
    res.send({
      //find user into db
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
})
);

export default userRouter;
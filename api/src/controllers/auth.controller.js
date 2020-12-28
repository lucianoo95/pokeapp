import { User } from '../models';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
const { SECRET_KEY } = process.env;

export const signUp = async (req, res) => {
  const { name, lastname, password, email } = req.body;
  const newUser = await User.create({
    name,
    lastname,
    password: await User.encryptPassword(password),
    email
  });

  const payloadToken = { id: newUser._id, }
  const token = jwt.sign(payloadToken, SECRET_KEY, {
    expiresIn: 86400 // 24hs
  });

  return res.status(201).json({
    ok: true,
    token
  });
}

export const signIn = async (req, res, next) => {
  const { password, email } = req.body;

  const userFound = await User.findOne({ email });
  if (userFound) {
    const matchPassword = await User.comparePassword(userFound.password, password);
    if (matchPassword) {
      const payloadToken = { id: userFound._id, }
      const token = jwt.sign(payloadToken, SECRET_KEY, {
        expiresIn: 86400 // 24hs
      });

      return res.status(200).json({
        ok: true,
        token
      });
    } else {
      return res.status(401).json({
        ok: false,
        message: 'Invalid email or password'
      });
    }
  } else {
    return res.status(401).json({
      ok: false,
      message: 'Invalid email or password'
    });
  }
}

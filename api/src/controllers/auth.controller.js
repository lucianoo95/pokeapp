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
    password: User.encryptPassword(password),
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

export const signIn = async (req, res) => {
  const { password, email } = req.body;

  const badResponse = res.json(404).json({
    ok: true,
    message: 'Invalid credentials'
  });

  const userFound = await User.find({ email });
  if (!userFound) return badResponse;

  const matchPassword = await User.comparePassword(userFound.password, password);
  if (!matchPassword) return badResponse;

  const payloadToken = { id: userFound._id, }
  const token = jwt.sign(payloadToken, SECRET_KEY, {
    expiresIn: 86400 // 24hs
  });

  return res.status(200).json({
    ok: true,
    token
  });
}

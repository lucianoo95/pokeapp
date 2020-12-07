import { User } from '../models';
import bcrypt from 'bcrypt';

export default {
  add: async (req, res) => {
    const userInfo = req.body;
    // verificar que el user no exista en la DB
    const user = await User.findOne({ email: userInfo.email });
    if (user) return res.json(404).json({
      ok: true,
      message: 'Already exists user with the same email.'
    });
    // Encriptar password
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);
    const newUser = await User.create(userInfo);
    return res.status(201).json({
      ok: true,
      newUser
    });
  },
  list: async (req, res) => {
    const users = await User.find({});
    return res.status(200).json({
      ok: true,
      users
    });
  }
}

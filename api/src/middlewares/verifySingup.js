import { User } from '../models';

export const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.status(400).json({
    ok: false,
    message: 'The user already exists'
  });

  next();
}
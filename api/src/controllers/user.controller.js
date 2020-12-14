import { User } from '../models';

export const list = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({
    ok: true,
    users
  });
}

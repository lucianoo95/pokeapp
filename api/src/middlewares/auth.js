import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();
const { SECRET_KEY } = process.env;

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({
      ok: false,
      message: 'No token provided'
    });

    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized'
    });
  }
}

export const verifyRole = async (req, res, next) => {
  const { userId } = req;
  const user = await User.findById(userId);

  if (!user.isAdmin) return res.status(403).json({
    ok: false,
    message: 'Require Admin  role.'
  });

  next();
}

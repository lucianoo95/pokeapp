import { error } from 'consola';

export const handleError = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  error({
    message: `Message: ${message}`,
    badge: true,
  });
  
  return res.status(status).json({
    ok: false,
    message
  });
}

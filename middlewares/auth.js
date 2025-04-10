// auth.js (middleware)
export const ensureAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'No autorizado' });
  }
  next();
};

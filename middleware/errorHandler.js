export default function errorHandler(err, req, res, next) {
  console.error('Erro:', err);
  if (res.headersSent) {
    return next(err);
  }
  const status = err.status || 500;
  const message = err.message || 'Erro interno do servidor';
  res.status(status).json({ message });
} 
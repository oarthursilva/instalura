export default function handler(req, res) {
  res.setPreviewData({});

  const KEY = 'BIRDMAN';

  if (req.query.key !== KEY) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  res.writeHead(307, { location: '/' });

  return res.end();
}

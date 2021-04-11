export default function production(req, res) {
  res.clearPreviewData();

  res.writeHead(307, { location: '/' });

  return res.end();
}

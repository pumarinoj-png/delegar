export default function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ ok: false, mensaje: 'API Key NO encontrada en Vercel' });
  return res.status(200).json({ ok: true, mensaje: 'API Key OK, longitud: ' + apiKey.length });
}

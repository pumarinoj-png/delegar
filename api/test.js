export default function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      message: 'ANTHROPIC_API_KEY no está configurada. Ve a Vercel → Settings → Environment Variables y agrégala. Luego haz Redeploy.'
    });
  }
  return res.status(200).json({
    ok: true,
    message: 'API Key encontrada correctamente. Longitud: ' + apiKey.length + ' caracteres.'
  });
}

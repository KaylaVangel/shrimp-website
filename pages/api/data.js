import fs from 'fs/promises'

export default async function handler(req, res) {
  const data = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');

  res.status(200).json(data)
}

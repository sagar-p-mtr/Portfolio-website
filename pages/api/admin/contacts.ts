import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllContacts, markAsRead, deleteContact } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simple password protection
  const authHeader = req.headers.authorization
  const validPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  if (authHeader !== `Bearer ${validPassword}`) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    const contacts = getAllContacts()
    return res.status(200).json(contacts)
  }

  if (req.method === 'PATCH') {
    const { id } = req.body
    markAsRead(id)
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'DELETE') {
    const { id } = req.body
    deleteContact(id)
    return res.status(200).json({ ok: true })
  }

  return res.status(405).json({ message: 'Method not allowed' })
}

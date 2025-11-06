// Simple file-based storage for contact messages
import fs from 'fs'
import path from 'path'

const DB_FILE = path.join(process.cwd(), 'data', 'contacts.json')

export interface ContactMessage {
  id: string
  name: string
  email: string
  service: string
  message: string
  timestamp: string
  read: boolean
}

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]))
  }
}

export function saveContact(contact: Omit<ContactMessage, 'id' | 'timestamp' | 'read'>) {
  ensureDataDir()
  const contacts = getAllContacts()
  const newContact: ContactMessage = {
    ...contact,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    read: false
  }
  contacts.unshift(newContact) // Add to beginning
  fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2))
  return newContact
}

export function getAllContacts(): ContactMessage[] {
  ensureDataDir()
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function markAsRead(id: string) {
  ensureDataDir()
  const contacts = getAllContacts()
  const contact = contacts.find(c => c.id === id)
  if (contact) {
    contact.read = true
    fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2))
  }
}

export function deleteContact(id: string) {
  ensureDataDir()
  const contacts = getAllContacts().filter(c => c.id !== id)
  fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2))
}

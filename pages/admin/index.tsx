import { useState, useEffect } from 'react'
import type { ContactMessage } from '../../lib/db'

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const login = () => {
    localStorage.setItem('adminPassword', password)
    setIsAuthenticated(true)
    fetchContacts(password)
  }

  const fetchContacts = async (pwd: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/contacts', {
        headers: { Authorization: `Bearer ${pwd}` }
      })
      if (res.ok) {
        const data = await res.json()
        setContacts(data)
        setError('')
      } else {
        setError('Invalid password')
        setIsAuthenticated(false)
        localStorage.removeItem('adminPassword')
      }
    } catch (err) {
      setError('Failed to fetch contacts')
    }
    setLoading(false)
  }

  const markAsRead = async (id: string) => {
    const pwd = localStorage.getItem('adminPassword')
    await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${pwd}` 
      },
      body: JSON.stringify({ id })
    })
    fetchContacts(pwd!)
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return
    const pwd = localStorage.getItem('adminPassword')
    await fetch('/api/admin/contacts', {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${pwd}` 
      },
      body: JSON.stringify({ id })
    })
    fetchContacts(pwd!)
  }

  useEffect(() => {
    const savedPassword = localStorage.getItem('adminPassword')
    if (savedPassword) {
      setPassword(savedPassword)
      setIsAuthenticated(true)
      fetchContacts(savedPassword)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full border border-slate-700">
          <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && login()}
            className="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 focus:border-blue-500 focus:outline-none mb-4"
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            Login
          </button>
          <p className="text-slate-400 text-xs mt-4">Default password: admin123</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Contact Messages</h1>
          <button
            onClick={() => {
              localStorage.removeItem('adminPassword')
              setIsAuthenticated(false)
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>

        {loading && <p className="text-white">Loading...</p>}

        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`bg-slate-800 border ${contact.read ? 'border-slate-700' : 'border-blue-500'} rounded-lg p-6 shadow-lg`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">{contact.name}</h2>
                  <p className="text-blue-400">{contact.email}</p>
                  <p className="text-purple-400 text-sm mt-1">Service: {contact.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm">
                    {new Date(contact.timestamp).toLocaleString()}
                  </p>
                  {!contact.read && (
                    <span className="inline-block mt-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded mb-4">
                <p className="text-slate-300 whitespace-pre-wrap">{contact.message}</p>
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition text-sm"
                >
                  Reply via Email
                </a>
                {!contact.read && (
                  <button
                    onClick={() => markAsRead(contact.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-sm"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {contacts.length === 0 && !loading && (
            <div className="text-center text-slate-400 py-12">
              No contact messages yet
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

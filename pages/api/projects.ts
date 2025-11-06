import type { NextApiRequest, NextApiResponse } from 'next'

const projects = [
  {
    id: 'flood',
    title: 'Real-Time Flood Reporting System',
    short: 'Real-time reporting with uploads, tags and alerts.'
  },
  {
    id: 'ai-quote',
    title: 'AI Motivational Quote Agent',
    short: 'OpenAI-powered CLI for motivational quotes.'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse){
  res.status(200).json(projects)
}

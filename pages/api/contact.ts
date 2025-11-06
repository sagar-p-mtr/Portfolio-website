import type { NextApiRequest, NextApiResponse } from 'next'
import { saveContact } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).json({message:'Method not allowed'})
  const { name, email, message, service } = req.body
  if(!name || !email || !message) return res.status(400).json({message:'Missing fields'})

  // Save to database
  const savedContact = saveContact({ name, email, service, message })
  console.log('New contact saved:', savedContact)

  try {
    // Dynamically import nodemailer
    const nodemailer = await import('nodemailer')
    
    // Create transporter - you'll need to configure your email service
    // For Gmail, you need to create an "App Password" in your Google Account settings
    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'sagarp.22cs@saividya.ac.in',
        pass: process.env.EMAIL_PASSWORD // You need to set this in .env.local
      }
    })

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'sagarp.22cs@saividya.ac.in',
      to: 'sagarp.22cs@saividya.ac.in',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent on ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email
    })

    console.log('Email sent successfully to sagarp.22cs@saividya.ac.in')
    return res.status(200).json({ok: true, message: 'Message sent successfully'})
    
  } catch (error) {
    console.error('Email send error:', error)
    // Still log the message even if email fails
    console.log('Contact Form Submission (email failed, but logged):', {name, email, service, message, timestamp: new Date().toISOString()})
    // Return success anyway so the form works during development
    return res.status(200).json({ok: true, message: 'Message received (logged to console)'})
  }
}

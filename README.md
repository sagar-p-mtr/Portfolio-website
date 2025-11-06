# Portfolio Website

Professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features glowing UI effects, responsive design, admin dashboard for contact form management, and showcases full-stack projects including real-time flood reporting, AI quote generation, and smart transit systems.

🔗 **Live Demo:** [Coming Soon]

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design Choices](#design-choices)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Challenges & Solutions](#challenges--solutions)
- [Assumptions](#assumptions)
- [Deployment](#deployment)

---

## 🎯 Overview

This is a modern, interactive portfolio website showcasing my skills, projects, and experience as a Computer Science student and Full-Stack Developer. The site features a sleek design with glowing effects, smooth animations, and a fully functional contact form with an admin dashboard for managing submissions.

### Key Highlights:
- ✨ **Glowing UI Effects** - Custom CSS animations with pulsing glows and hover effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎨 **Modern Design** - Blue-purple gradient theme with dark mode aesthetics
- 📧 **Contact Management** - Admin dashboard to view and manage contact form submissions
- 🔒 **Password Protected Admin** - Secure access to contact messages
- 🚀 **Fast Performance** - Optimized with Next.js 14 and static generation

---

## ✨ Features

### User Features
- **Hero Section** - Profile photo with glowing circular frame, social links, and stats
- **About Me** - Personal introduction with education and volunteering details
- **Education** - Academic background and coursework
- **Skills** - Interactive skill badges with hover effects (Programming, Frameworks, Tools)
- **Projects** - Showcase of 3 major projects with GitHub links and tech stacks
- **Contact Form** - Multi-field form with service selection and email notifications
- **Social Sidebar** - LinkedIn and GitHub links with response time information

### Admin Features
- **Admin Dashboard** (`/admin`) - Password-protected interface
- **View All Messages** - See all contact form submissions
- **Mark as Read** - Track which messages have been reviewed
- **Delete Messages** - Remove unwanted submissions
- **Reply via Email** - Quick access to respond to inquiries
- **Persistent Storage** - Messages saved in JSON file

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.0.0** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Nodemailer** - Email sending functionality
- **File System (fs)** - Local JSON database for contact messages

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **VS Code** - IDE

---

## 🎨 Design Choices

### 1. **Color Scheme**
- **Primary:** Blue (#3b82f6) to Purple (#7c3aed) gradients
- **Background:** Dark navy (#0a0e1a) for modern aesthetic
- **Accent:** Glowing effects with rgba transparency for depth

### 2. **Typography**
- **Font:** Inter (system UI fallback) for clean readability
- **Hierarchy:** Clear sizing with text-2xl to text-7xl for headings

### 3. **Animations**
- **Glow Pulse:** 2-3s infinite animations on key elements
- **Hover Effects:** Transform and shadow transitions (0.3s duration)
- **Background:** Animated radial gradients for depth

### 4. **Layout**
- **Sticky Navigation:** Fixed header with scroll offset (68px)
- **Section Spacing:** Consistent pt-32/pb-24 for proper navigation
- **Grid System:** Responsive 1-2-3 column layouts using Tailwind

### 5. **Component Architecture**
- **Modular Components:** Separate files for each section
- **Reusable Styles:** `.panel` class for consistent card design
- **Props Typing:** TypeScript interfaces for type safety

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sagar-p-mtr/Portfolio-website.git
cd Portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Email Configuration (Optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Admin Dashboard Password (Optional - defaults to 'admin123')
ADMIN_PASSWORD=your-secure-password
```

> **Note:** For Gmail, generate an App Password at [Google Account Security](https://myaccount.google.com/apppasswords)

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📡 API Endpoints

### 1. Contact Form Submission

**Endpoint:** `POST /api/contact`

**Description:** Submits a contact form and sends email notification

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "web",
  "message": "I'd like to discuss a project"
}
```

**Response (Success):**
```json
{
  "ok": true,
  "message": "Message sent successfully"
}
```

**Response (Error):**
```json
{
  "message": "Missing fields"
}
```

**Status Codes:**
- `200` - Success
- `400` - Bad Request (missing fields)
- `405` - Method Not Allowed
- `500` - Server Error (email failed, but message logged)

**Behavior:**
- Saves message to `data/contacts.json`
- Attempts to send email via Nodemailer
- Returns success even if email fails (logs to console)

---

### 2. Get All Contacts (Admin)

**Endpoint:** `GET /api/admin/contacts`

**Description:** Retrieves all contact form submissions

**Headers:**
```
Authorization: Bearer your-admin-password
```

**Response:**
```json
[
  {
    "id": "1699300000000",
    "name": "John Doe",
    "email": "john@example.com",
    "service": "web",
    "message": "Project inquiry",
    "timestamp": "2025-11-07T10:30:00.000Z",
    "read": false
  }
]
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized (invalid password)

---

### 3. Mark Contact as Read

**Endpoint:** `PATCH /api/admin/contacts`

**Description:** Marks a contact message as read

**Headers:**
```
Authorization: Bearer your-admin-password
Content-Type: application/json
```

**Request Body:**
```json
{
  "id": "1699300000000"
}
```

**Response:**
```json
{
  "ok": true
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

---

### 4. Delete Contact

**Endpoint:** `DELETE /api/admin/contacts`

**Description:** Deletes a contact message

**Headers:**
```
Authorization: Bearer your-admin-password
Content-Type: application/json
```

**Request Body:**
```json
{
  "id": "1699300000000"
}
```

**Response:**
```json
{
  "ok": true
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

---

### API Testing with Postman

You can import this collection to test the APIs:

**Base URL:** `http://localhost:3000`

**Collection Structure:**
```
Portfolio APIs
├── Contact
│   └── POST /api/contact
└── Admin
    ├── GET /api/admin/contacts
    ├── PATCH /api/admin/contacts (Mark as Read)
    └── DELETE /api/admin/contacts
```

---

## 📁 Project Structure

```
next-portfolio/
├── components/           # React components
│   ├── About.tsx        # About Me section
│   ├── Contact.tsx      # Contact form with sidebar
│   ├── Experience.tsx   # Education section
│   ├── Hero.tsx         # Landing section with photo
│   ├── Layout.tsx       # Navigation wrapper
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills grid
├── pages/
│   ├── _app.tsx         # Next.js app wrapper
│   ├── index.tsx        # Homepage
│   ├── admin/
│   │   └── index.tsx    # Admin dashboard
│   └── api/
│       ├── contact.ts   # Contact form API
│       └── admin/
│           └── contacts.ts  # Admin CRUD API
├── lib/
│   └── db.ts            # Database functions (file-based)
├── styles/
│   └── globals.css      # Global styles & animations
├── public/
│   └── assets/
│       └── photo.jpg    # Profile picture
├── data/
│   └── contacts.json    # Contact messages storage
├── .env.local           # Environment variables (gitignored)
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.cjs  # Tailwind config
└── next.config.js       # Next.js config
```

---

## 🔐 Environment Variables

Create a `.env.local` file with these variables:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `EMAIL_USER` | Gmail address for sending emails | No | sagarp.22cs@saividya.ac.in |
| `EMAIL_PASSWORD` | Gmail App Password | No | - |
| `ADMIN_PASSWORD` | Admin dashboard password | No | admin123 |

### Setting up Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate password for "Mail"
5. Copy the 16-character password
6. Paste in `.env.local` as `EMAIL_PASSWORD`

---

## 🧩 Challenges & Solutions

### Challenge 1: Scroll Offset with Fixed Navigation
**Problem:** When clicking navigation links, content was hidden behind the fixed header.

**Solution:** Added `scroll-padding-top: 68px` to the HTML element to account for the sticky navigation height.

```css
html {
  scroll-padding-top: 68px;
}
```

---

### Challenge 2: Profile Photo Positioning
**Problem:** Profile photo showing too much background or cutting off features.

**Solution:** Used `object-position: center 38%` to fine-tune the visible area of the circular crop.

```css
.avatar {
  object-position: center 38%;
}
```

---

### Challenge 3: Email Functionality Without Server
**Problem:** Needed email sending in a serverless environment without exposing credentials.

**Solution:** 
- Used Nodemailer with dynamic import
- Stored credentials in environment variables
- Implemented fallback logging if email fails
- Returns success to user even if email fails (improves UX)

```typescript
try {
  const nodemailer = await import('nodemailer')
  // ... send email
} catch (error) {
  console.log('Message logged:', message)
  return res.status(200).json({ok: true}) // Still success
}
```

---

### Challenge 4: Admin Dashboard Security
**Problem:** Needed simple authentication without complex auth setup.

**Solution:** Implemented password-based Bearer token authentication with localStorage persistence.

```typescript
const authHeader = req.headers.authorization
const validPassword = process.env.ADMIN_PASSWORD || 'admin123'

if (authHeader !== `Bearer ${validPassword}`) {
  return res.status(401).json({ message: 'Unauthorized' })
}
```

---

### Challenge 5: Glowing Effects Performance
**Problem:** Multiple CSS animations causing performance issues.

**Solution:**
- Used `will-change` property for animated elements
- Optimized keyframes to only animate necessary properties
- Limited animation duration to 2-3s
- Used `transform` instead of `width/height` changes

```css
@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)); }
  50% { filter: drop-shadow(0 0 30px rgba(124, 58, 237, 0.8)); }
}
```

---

## 📝 Assumptions

### 1. **Email Service**
- Assumes Gmail is used for sending emails
- Users need to generate App Password (not regular password)
- Falls back to console logging if email fails

### 2. **Data Storage**
- Uses file-based JSON storage (`data/contacts.json`)
- Suitable for portfolio sites with low traffic
- Would need database for production with high traffic

### 3. **Admin Access**
- Single admin user (no multi-user support)
- Password stored in environment variable
- Browser localStorage used for session persistence

### 4. **Browser Compatibility**
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Assumes JavaScript is enabled

### 5. **Image Optimization**
- Profile photo manually optimized before upload
- Next.js Image component handles responsive sizes
- Assumes JPG format for photos

### 6. **Development Environment**
- Assumes Node.js 18+ is installed
- Local development on port 3000
- Git for version control

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Add environment variables in Vercel dashboard
- Click Deploy

3. **Set Environment Variables**
In Vercel dashboard:
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `ADMIN_PASSWORD`

4. **Your site is live! 🎉**

### Alternative: Deploy to Netlify

```bash
npm run build
netlify deploy --prod
```

---

## 📧 Contact

**Sagar P**
- Email: sagarp.22cs@saividya.ac.in
- LinkedIn: [linkedin.com/in/sagar-p-526238330](https://linkedin.com/in/sagar-p-526238330/)
- GitHub: [github.com/sagar-p-mtr](https://github.com/sagar-p-mtr)
- Location: Bengaluru, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Vercel for free hosting
- Nodemailer for email functionality

---

**Made with ❤️ by Sagar P**

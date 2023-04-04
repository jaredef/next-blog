import { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Jared Foy',
  description: 'A blog by Jared Foy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

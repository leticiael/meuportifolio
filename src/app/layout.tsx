import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portfólio Letícia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#170004', color: '#6f7173' }}>
        {children}
      </body>
    </html>
  )
}
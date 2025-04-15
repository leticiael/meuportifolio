import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portfólio Leticia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicoq.png" type="image/png" />
        <link rel="icon" href="/favicoq.png" type="image/png" sizes="32x32" />
<link rel="icon" href="/favicoq.png" type="image/png" sizes="16x16" />
      </head>
      <body style={{ backgroundColor: '#170004', color: '#6f7173' }}>
        {children}
      </body>
    </html>
  )
}
import './globals.css'

export const metadata = {
  title: 'Transcritor de Vídeos',
  description: 'Aplicação para transcrição de vídeos do Google Drive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

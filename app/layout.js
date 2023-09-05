import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Главная | Next13 App',
  description: 'Тестовое приложение Next JS 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-color-shark text-color-aliceblue h-screen grid grid-rows-[auto_1fr_auto]" >
        <Header />
        <main className='container'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

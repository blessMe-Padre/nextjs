import Link from "next/link";

export const metadata = {
    title: 'О нас 2 | Next13 App',
    description: 'Тестовое приложение Next JS 13',
  }

export default function AboutLayout({ children }) {
    return (
        <div>
            <h1 className='text-2xl underline text-center'>страница о компании</h1>
            <ul>
                <li className="text-lg underline"><Link href="/about/contact">Контакты</Link></li>
                <li className="text-lg underline"><Link href="/about/team">Команда</Link></li>
            </ul>
            {children}
        </div>
    )
  }
  
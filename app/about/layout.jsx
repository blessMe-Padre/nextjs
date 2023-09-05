import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <div>
            <h1>страница о компании</h1>
            <ul>
                <li><Link href="/about/contact">Контакты</Link></li>
                <li><Link href="/about/team">Команда</Link></li>
            </ul>
            {children}
        </div>
    )
  }
  
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="container bg-gray-100 p-4 min-h-[60px] flex items-center justify-between">
            <h1 className="text-2xl font-bold">Next13</h1>

            <ul className='flex gap-5'>
                <li><Link href='/'>Главная</Link></li>
                <li><Link href='/blog'>Блог</Link></li>
                <li><Link href='/about'>О нас</Link></li>
            </ul>



        </header>
    );
};

export default Header;

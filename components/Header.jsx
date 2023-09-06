import React from 'react';
import Navigation from './Navigation';
import Image from "next/image";
import Link from 'next/link';

const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: 'О нас', href: '/about' },
    { label: 'Магазин', href: '/shop' },
];


const Header = () => {

    const totalItem = 3;

    return (
        <header className="container bg-gray-100 p-4 min-h-[60px] flex items-center justify-between">
            <h1 className="text-2xl font-bold">Next13-test</h1>
            <Navigation navItems={navItems} />

            <Link href="/cart" className='relative'>
                <Image
                    src="./cart.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                    className=""
                />
                {totalItem > 0 ? (<span className='card-span'>{totalItem}</span>) : null}
            </Link>

        </header>
    );
};

export default Header;

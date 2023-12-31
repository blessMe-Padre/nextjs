"use client"; 

import React from 'react';
import { useSelector } from 'react-redux';

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
  
    const item = useSelector(state => state.cart.itemInCart);
    const totalItem = item.length;

    return (
        <header className="container bg-gray-100 p-4 min-h-[60px] flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Next13-test</h1>
            <Navigation navItems={navItems} />

            <Link href="/cart" className='relative flex border-2 rounded p-2'>
                <Image
                    src="./cart.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                    className="mr-2"
                    />
                Корзина
                {totalItem > 0 ? (<span className='card-span'>{totalItem}</span>) : null}
            </Link>

        </header>
    );
};

export default Header;

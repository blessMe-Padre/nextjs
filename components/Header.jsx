import React from 'react';
import Navigation from './Navigation';

const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: 'О нас', href: '/about' },
];


const Header = () => {
    return (
        <header className="container bg-gray-100 p-4 min-h-[60px] flex items-center justify-between">
            <h1 className="text-2xl font-bold">Next13-test</h1>
            <Navigation navItems={navItems} />
        </header>
    );
};

export default Header;

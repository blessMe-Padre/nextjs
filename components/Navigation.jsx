'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

function Navigation({ navItems }) {
    const pathname = usePathname();
    return (
        <ul className='flex gap-5'>
            {
                navItems.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <li key={link.label} className='text-xl hover:text-color-blue'>
                            <Link
                                href={link.href}
                                className={isActive ? 'underline' : ''}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigation;
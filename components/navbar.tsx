import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react'; 
const Navbar = (): JSX.Element => {
    return (
        <nav className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
            <ul className="flex justify-around list-none m-0 p-0">
                <li className="text-black hover:opacity-90">
                    <Link href="/cuanto-subio" className='flex gap-2'>
                    <ShoppingCart />
                     Calculadora mensual
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

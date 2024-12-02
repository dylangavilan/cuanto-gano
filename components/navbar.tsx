import React from 'react';
import Link from 'next/link';

const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between">
            <h1>DG</h1>
            <ul className="flex justify-around list-none m-0 p-0">
                <li className="text-white">
                    <Link href="/cuanto-subio">cuanto-subio</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

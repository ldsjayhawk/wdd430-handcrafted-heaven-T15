"use client";

import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Artisans", href: "/artisans" },
];

export default function NavLinks({
    onLinkClick,
}: {
    onLinkClick?: () => void;
}) {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={onLinkClick}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Accueil",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "À Propos",
        path: "/resume",
    },
    {
        name: "Projets",
        path: "/work",
    },
]

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
            <Link 
              href={link.path} 
              key={index}
              className={`$${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
              aria-current={link.path === pathname ? "page" : undefined}
              aria-label={link.name}
            >
              {link.name}
            </Link>
        );
      })}
    </nav>
  );
};

export default Nav
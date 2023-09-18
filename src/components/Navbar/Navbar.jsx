"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const options = [
  { name: "Products", to: "/" },
  { name: "About Us", to: "/about" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-10 flex items-center place-content-center bg-yellow-400 shadow-md fixed">
      <div className="w-3/4 flex justify-center items-center space-x-10">
        {options.map((option, index) => (
          <Link key={index} href={option.to}>
            <p
              className={`text-slate-500 ${
                pathname === option.to && "text-slate-700 font-bold"
              }`}
            >
              {option.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

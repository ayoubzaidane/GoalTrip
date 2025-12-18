"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="max-w-7xl mx-auto px-4 nav-inner">

        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          GoalTrip
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`links md:flex md:static absolute left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 
          transition-all duration-300 overflow-hidden 
          ${open ? "max-h-40 py-4 border-t" : "max-h-0 md:max-h-none"}`}
        >
          <Link className="hover:text-blue-600" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-600" href="/premier-league">
            Premier League
          </Link>
          <Link className="hover:text-blue-600" href="/saudi-league">
            Saudi League
          </Link>

          {/* Example Button (you can remove or modify) */}
          <Link href="/packages" className="btn btn-primary ml-2 hidden md:inline-flex">
            Packages
          </Link>
        </div>
      </div>
    </nav>
  );
}


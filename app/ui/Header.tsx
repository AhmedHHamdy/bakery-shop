import Link from "next/link"
import { kalam } from "./fonts"
import { IoSearch,  } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-Lemon_Zest px-6 py-8 border-8 fixed w-full z-10">
      <nav className="sm:hidden flex justify-between">
        <Link className="text-base font-bold" href="/shop">Shop</Link>
        {/* <Link className="text-base " href="/about">About</Link> */}
        <Link className={`text-xl font-bold ${kalam.className}`} href="/">Cupcaked</Link>
        <Link className="text-base font-bold" href="/contact">Contact Us</Link>
      </nav>

      <nav className="hidden sm:flex justify-between">
        <div className="flex justify-between items-center gap-5">
          <Link className="text-xl font-bold hover:underline" href="/shop">Shop</Link>
          <Link className="text-xl font-bold hover:underline" href="/about">About</Link>
          <Link className="text-xl font-bold hover:underline" href="/contact">Contact Us</Link>
        </div>
        
        <Link className={`text-3xl font-bold ${kalam.className}`} href="/">Cupcaked</Link>

        <div className="flex justify-between items-center gap-20">
          <Link className="text-xl" href="/shop"><FaRegUserCircle className="text-3xl font-bold" /></Link>
          <Link className="text-xl" href="/shop"><IoSearch className="text-3xl font-bold" /></Link>
          <Link className="text-xl" href="/shop"><MdOutlineShoppingCart className="text-3xl font-bold" /></Link>
        </div>
      </nav>
    </header>
  )
}
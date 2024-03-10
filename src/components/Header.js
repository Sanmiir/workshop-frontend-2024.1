'use client'
import Link from "next/link";

import "/src/app/globals.css";
import { useState } from "react";

const Header = () => {
  return (
    <header className="">
        <Link href="/"><img className="w-56" src="netflix.jpg" alt="Logo Netflix"/></Link>
        <nav className="">
          <ul className="">
            <Link href="/"><li className="text-2xl text-white">Home</li></Link>
            <Link href="/catalogo"><li className="text-2xl text-white">Catálogo</li></Link>
            <form>
              <input  className="h-10 w-100 rounded-md border-2 border-red-600"  type="text" placeholder="Busque uma Série"/>
              <button  className="bg-red-900 text-white ml-2 h-10 w-20 hover:bg-red-600 rounded-md " type="submit" title="buscar">Buscar</button>
            </form>
          </ul>
        </nav>
        </header>
    
  )
}

export default Header
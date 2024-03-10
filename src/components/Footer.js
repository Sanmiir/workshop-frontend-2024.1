'use client'

import "/src/app/globals.css";
import Link from "next/link";


const Footer = () => {
  return (
    <footer>
    <Link  className="w-3/4"rel="icon" href="/public/netflix.jpg"/>
    <span>Todos os direitos reservados ©</span>
    <span>Desenvolvido por: Sanmir Gabriel</span>
    </footer>
  )
}

export default Footer

import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Netflix</title> 
        <Link rel="icon" href="./public/favicon.ico"/>
      </head>
      <body className="bg-black">
        <Header/>
        
        <div class="linha"></div>
        {children}
        <footer> <Footer/></footer>
      
      </body>
    </html>
  );
}

"use client"

import { BestBusiness } from "./components/BestBusiness";
import { ChooseYourCards } from "./components/ChooseYourCards";
import { ControlBilling } from "./components/ControlBilling";
import CounterData from "./components/CounterData/CounterData";
import { FirstBlock } from "./components/FirstBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/header";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import { Domine, Faustina, Inter, Markazi_Text, PT_Sans, Radley, Zen_Antique_Soft   } from 'next/font/google'
import VideoBlock from "./components/VideoBlock/VideoBlock";
import Contact from "./components/Contact/Contact";
import Silk from "@/components/Silk";
import Aurora from "@/components/Aurora";
import StaggeredMenu from "@/components/StaggeredMenu";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";


// --- ClientOnly wrapper ---
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  if (!isClient) return null
  return <>{children}</>
}

// --- LazyLoad wrapper ---
const LazyLoad = ({ children, rootMargin = "200px 0px", threshold = 0 }: { children: React.ReactNode, rootMargin?: string, threshold?: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { rootMargin, threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, rootMargin, threshold])

  return <div ref={ref}>{isVisible ? children : null}</div>
}


const roboto = Inter ({
  weight: '400',
  subsets: ['latin'],
})

const markazi = PT_Sans ({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
  const menuItems = [

  { label: 'Inicio', ariaLabel: 'Go to home page', link: '#home' },

  { label: 'Servicios', ariaLabel: 'Learn about us', link: '#services' },

  { label: 'Especial', ariaLabel: 'View our services', link: '#other' },

  { label: 'Tarifas', ariaLabel: 'Get in touch', link: '#prices' },

  { label: 'Contacto', ariaLabel: 'Get in touch', link: '#contact' }

];

const [menuMobileOpen, setMenuMobileOpen] = useState(false);

const socialItems = [
/*
  { label: 'Twitter', link: 'https://twitter.com' },

  { label: 'GitHub', link: 'https://github.com' },

  { label: 'LinkedIn', link: 'https://linkedin.com' }
*/
];

 const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // asegura que esto solo se haga en cliente
  }, []);
    return (


      <main className={markazi.className}>
         {mounted && <div className={`fixed inset-0 z-[1000] lg:hidden ${menuMobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={[]}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#7C543C', '#946D47']}
            logoUrl=""
            accentColor="#603d1c"
            onMenuOpen={() => {setMenuMobileOpen(true)  }}
            onMenuClose={() => {setMenuMobileOpen(false)}}
            isOpen={false}
          />
        </div> }
        <div  className="min-h-screen text-[#f3ebe2]"
       >
          
         <div className="relative w-full h-full">
            {/* Silk como fondo */}
            <div  className="absolute hidden  inset-0 -z-10"> 
               {/* md:block */}
              
              <Silk
                speed={5}
                scale={1}
                color="#674321"
                noiseIntensity={0.5}
                rotation={0}
              
              />
            </div>
            {/* Contenido encima del fondo */}
            <div className="relative z-10">
                <div   className="min-h-screen p-2 text-[#f3ebe2] 
             bg-[#674321] bg-[url('/images/dark-leather.png')] bg-repeat bg-auto bg-blend-overlay
            ">
              <Header />
              <FirstBlock />
              </div>
            </div>
          </div>
        
        
          <CounterData />
        <div className="bg-[#180e05] relative  w-full h-full">
          <div  className="absolute hidden  w-full h-full">
           
             <Aurora

          colorStops={["#7C543C", "#603d1c", "#946D47"]}

          blend={0.5}

          amplitude={1.0}

          speed={0.5}

        />
          </div>

  {/* 🌤️ Sombra marrón clara SOLO visible en móvil */}
   <div className="absolute top-0 left-0 w-full h-40  pointer-events-none z-10">
    <div className="  w-full h-full bg-gradient-to-b from-[#b58a61]/60 to-transparent rounded-b-full blur-3xl"></div>
  </div>
  
         <BestBusiness />
         </div>
          {/* VideoBlock con fondo dividido */}
          <div className="relative w-full">
            {/* Fondo con degradado */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, #180e05 0%, #180e05 35%, #7C543C 65%, #946D47 100%)",
                transition: "background 0.5s ease-in-out",
                zIndex: 0,
              }}
            />

            {/* Video por encima */}
            <div className="relative z-10">
              <VideoBlock />
            </div>
          </div>
           <div className="bg-[#946D47]  relative z-10">
         <ChooseYourCards />
 
        </div>
        
          <div className="bg-[#180e05]  relative z-10">
               <div className="absolute top-0 left-0 w-full h-40 md:hidden pointer-events-none z-10">
    <div className=" md:hidden w-full h-full bg-gradient-to-b from-[#b58a61]/60 to-transparent rounded-b-full blur-3xl"></div>
  </div>
              <ControlBilling />
            <Contact />
            
         <Footer /> 
    </div>
         {/* <PaymentMethods /> */}

        </div>
        </main>
    
    );
}

export default Home;
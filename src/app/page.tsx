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

  { label: 'Inicio', ariaLabel: 'Go to home page', link: '/' },

  { label: 'Servicios', ariaLabel: 'Learn about us', link: '#services' },

  { label: 'Más allá', ariaLabel: 'View our services', link: '/services' },

  { label: 'Tarifas', ariaLabel: 'Get in touch', link: '/contact' },

  { label: 'Contacto', ariaLabel: 'Get in touch', link: '/contact' }

];


const socialItems = [

  { label: 'Twitter', link: 'https://twitter.com' },

  { label: 'GitHub', link: 'https://github.com' },

  { label: 'LinkedIn', link: 'https://linkedin.com' }

];

    return (
      <main className={markazi.className}>
        <div  className="min-h-screen text-[#f3ebe2]"
       >
         <div className="relative w-full h-full overflow-hidden">
  {/* Silk como fondo */}
  <div  className="absolute top-0 bottom-0 left-0 w-full -z-10">
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
   <div className="fixed inset-0 z-[1000] lg:hidden">
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#B19EEF', '#5227FF']}
      logoUrl="/path-to-your-logo.svg"
      accentColor="#ff6b6b"
      onMenuOpen={() => {console.log('Menu opened'); document.body.style.overflow = 'hidden'; }}
      onMenuClose={() => console.log('Menu closed')}
    />
  </div>
    <Header />
    <FirstBlock />
  </div>
</div>


        
        
          <CounterData />
        <div className="bg-[#180e05] relative  w-full h-full overflow-hidden">
          <div  className="absolute w-full h-full">
             <Aurora

          colorStops={["#7C543C", "#603d1c", "#946D47"]}

          blend={0.5}

          amplitude={1.0}

          speed={0.5}

        />
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
  <div className="relative z-50">
    <VideoBlock />
  </div>
</div>
 
           <div className="bg-[#946D47]">
         <ChooseYourCards />
 
        </div>
          <div className="bg-[#180e05]">
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
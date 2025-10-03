"use client"

import { BestBusiness } from "./components/BestBusiness";
import { ChooseYourCards } from "./components/ChooseYourCards";
import { ControlBilling } from "./components/ControlBilling";
import CounterData from "./components/CounterData/CounterData";
import { FirstBlock } from "./components/FirstBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/header";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import { Inter, Markazi_Text, Radley   } from 'next/font/google'
import VideoBlock from "./components/VideoBlock/VideoBlock";
import Contact from "./components/Contact/Contact";
import Silk from "@/components/Silk";

const roboto = Inter ({
  weight: '400',
  subsets: ['latin'],
})

const markazi = Radley ({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
    return (
      <main className={markazi.className}>
        <div  className="min-h-screen text-[#f3ebe2]"
       >
         <div className="relative w-full h-full overflow-hidden">
  {/* Silk como fondo */}
  <div  className="absolute top-0 left-0 w-full h-full -z-10">
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
    <Header />
    <FirstBlock />
  </div>
</div>

        
         <CounterData />
              {/* <CounterData /> */}
         <BestBusiness />
         <VideoBlock />
         <ChooseYourCards />
         <div  style={{
          backgroundColor: "#674321", // marrón cálido base
          backgroundImage: "url('/assets/dark-leather.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "overlay"
        }}>
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
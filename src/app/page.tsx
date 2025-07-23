"use client"

import { BestBusiness } from "./components/BestBusiness";
import { ChooseYourCards } from "./components/ChooseYourCards";
import { ControlBilling } from "./components/ControlBilling";
import CounterData from "./components/CounterData/CounterData";
import { FirstBlock } from "./components/FirstBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/header";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import { Inter   } from 'next/font/google'
import VideoBlock from "./components/VideoBlock/VideoBlock";
import Contact from "./components/Contact/Contact";

const roboto = Inter ({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
    return (
      <main className={roboto.className}>
        <div  className="min-h-screen text-[#f3ebe2]"
        style={{
          backgroundColor: "#674321", // marrón cálido base
          backgroundImage: "url('/assets/dark-leather.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "overlay"
        }}>
         <Header/>

         <FirstBlock></FirstBlock>
         <CounterData />
         
         {/* <CounterData /> */}
         <BestBusiness />
         <VideoBlock />
         <ChooseYourCards />
         <ControlBilling />
         <Contact />
         {/* <PaymentMethods /> */}

         <Footer /> 
        </div>
        </main>
    );
}

export default Home;
"use client"

import { BestBusiness } from "./components/BestBusiness";
import { ChooseYourCards } from "./components/ChooseYourCards";
import { ControlBilling } from "./components/ControlBilling";
import CounterData from "./components/CounterData/CounterData";
import { FirstBlock } from "./components/FirstBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/header";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";



const Home = () => {
    return (
        <>
         <Header/>
         <FirstBlock></FirstBlock>
         <CounterData />
         <BestBusiness />
         <ChooseYourCards />
         <ControlBilling />
         <PaymentMethods />
         <Footer /> 
        </>
    );
}

export default Home;
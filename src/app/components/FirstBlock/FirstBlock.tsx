"use client"
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { Dynalight, Gasoek_One, Ms_Madi, Send_Flowers, Yellowtail } from 'next/font/google'
import Silk from "@/components/Silk";
import ShinyText from "@/components/ShinyText";

const dynalight = Ms_Madi({ subsets: ['latin'], weight: '400' })
const gasoekOne = Gasoek_One({ subsets: ['latin'], weight: '400' })


export function FirstBlock() {
   return (
  <div id="home" className="relative flex items-center justify-center w-full md:h-screen p-4 overflow-hidden lg:pt-8 pt-20">
    {/* Fondo animado */}
   
   

    {/* Contenido principal */}
    <div className="grid max-w-6xl mx-auto md:grid-cols-2 relative z-10">
      <div className="flex flex-col justify-center">
        <Reveal>
          <h1 className={`md:text-7xl text-6xl font-semibold ${gasoekOne.className}`}>
            Tu zapatería <br /> de <span className="text-[#e4a674]">toda la vida</span>
          </h1>
        </Reveal>
        <Reveal>
          <h1 className={`ml-1 text-4xl text-[#f6d5b9] mt-6 ${dynalight.className}`}>
            Dos generaciones acompañando y <br />cuidando cada paso que das
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-md mt-6">
            Desde hace décadas perfeccionamos el arte de la reparación y restauración de calzado. Con
            la misma pasión de siempre, damos nueva vida a tus zapatos y preservamos las historias que
            caminan contigo.
          </p>
        </Reveal>
        <div className="relative overflow-hidden w-full">

       
        <Reveal>
          <div className="my-8 w-full">
            <Link href="#formatos" className="block Fw-full px-4 py-3 rounded-md bg-[#7a5737] border-[#fff4d9]">
              <ShinyText

                text="Solicita tu reparación!" 

                disabled={false} 

                speed={3} 

                className='custom-class' 

              />
            </Link>
          </div>
        </Reveal>
        </div>
      </div>

      <MotionTransition className="flex items-center justify-center">
        <img
          src="/images/home_image.png"
          alt="Card"
          width={550}
          height={550}
          className="h-auto w-80 md:w-full"
        />
      </MotionTransition>
    </div>
  </div>
)

}
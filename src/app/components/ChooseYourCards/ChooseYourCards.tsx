"use clients"
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from "swiper/modules"
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import 'swiper/css'
import 'swiper/css/effect-cards'
import { useRef, useEffect, useState } from 'react';


export function ChooseYourCards() {
    return (
        <div id="other" className="relative px-6 py-20 md:py-64">

            <div className="grid max-w-5xl mx-auto md:grid md:grid-cols-2">
                <div>
                  <Reveal>
                    <h2 className="text-5xl font-semibold">  <span className=" text-[#e4a674]">Más allá</span> de <br/>
                       los  zapatos
                        
                    </h2>
                </Reveal>
                 <Reveal>
                    <p className="max-w-md mt-10">Además de nuestros zapatos, también damos vida a muñecas artesanales, únicas y llenas de detalles. Cada una está hecha a mano con el mismo cuidado y dedicación que ponemos en todos nuestros trabajos.
                    </p>
                </Reveal>
                </div>
                
                <div className="
                mt-8 mx-auto 
                w-full 
                max-w-[240px]   
                h-[180px]       
                sm:max-w-[320px] sm:h-[220px] 
                md:max-w-[400px] md:h-[250px]
              ">
                <MotionTransition>
                  <Swiper
                    effect="cards"
                    grabCursor
                    modules={[EffectCards]}
                    className="h-full"
                    initialSlide={2}
                    cardsEffect={{
                      perSlideOffset: 8,
                      slideShadows: false,
                    }}
                  >
                    {dataCards.map(({ image, id }) => (
                      <SwiperSlide key={id} className="flex items-center justify-center h-full">
                        <Image
                          src={image}
                          alt="Credit card"
                          width={300}
                          height={200}
                          sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 400px"
                          className="rounded-md w-full h-auto object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </MotionTransition>
              </div>
            </div>
        </div>
    )
}
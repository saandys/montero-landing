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


export function ChooseYourCards() {
    return (
        <div id="other" className="relative px-6 py-20 md-py-64">

            <div
            className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl font-semibold">Otros de <br/> nuestros
                        <span className=" text-[#e4a674]"> trabajos</span>
                        
                    </h2>
                </Reveal>
                <div className="px-5">
                    
                    <MotionTransition>
                        <Swiper
                        
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            cardsEffect={{
                                perSlideOffset: 8,  // Ajusta el desplazamiento si quieres menos apilado
                                slideShadows: false // Esta es la clave para eliminar sombras del efecto cards
                              }}
                            >
                                {dataCards.map(({image, id}) => (
                                    <SwiperSlide key={id}>
                                        <Image src={image} alt="Credit card" width="400" height="300" className="rounded-md"/>
                                    </SwiperSlide>
                                ))}

                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}
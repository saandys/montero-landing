"use client"
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
    return (
        <div id="home" className="relative p-4 md:px-40 py-15">

            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Tu zapatería de
                            <span className="block text-[#e4a674]">
                                toda la vida
                            </span>
                            
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Desde hace dos generaciones, nuestra familia ha perfeccionado el arte de la reparación y restauración de calzado. Hoy, seguimos con la misma pasión y dedicación, asegurando que cada par de zapatos reciba el cuidado que merece. Porque no solo reparamos calzado, preservamos historias, pasos y recuerdos.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#contact" className="px-4 py-3 rounded-md bg-[#83552d]">Solicita tu reparación</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center">
                    <Image src="/assets/home_image.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
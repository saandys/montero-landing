"use client"

import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"
import { Gasoek_One } from "next/font/google"
const gasoekOne = Gasoek_One({ subsets: ['latin'], weight: '400' })

export function BestBusiness() {
    return (
        <div id="services" className="relative px-6 pt-10 md:pt-28 md:pb-16">
           
            <div className="grid max-w-7xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className={`text-5xl font-semibold ${gasoekOne.className}`}>
                            <span className=" text-[#e4a674] ">Más que </span>
                            una <br/> <span className="text-[#e4a674] ">zapatería</span>, un <br/>taller artesanal
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Nos especializamos en trabajos artesanales de alta calidad para alargar la vida útil de tus artículos favoritos.
                        </p>
                    </Reveal>
                  
                </div>
                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({id, icon, title, description}) => (
                        <Reveal key={id}>
                        <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-[#9f6f45] bg-[#5C3C24] mb-2 transition-colors duration-300">
                          <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                          <div>
                            <h4 className="text-[#f3ebe2] font-bold">{title}</h4>
                            <p className="text-[#d9cfc4]">{description}</p>
                          </div>
                        </div>
                      </Reveal>
                      
                    ))}
                </div>
            </div>
        </div>
    )
}
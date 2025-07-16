"use client"

import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue text-blue-200" >Tú haces el negocio</span>
                            nosotros manegamos <br />
                            el dinero
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Con la targeta aaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaa aaaaaaa
                            aaaaaaaaaa aaaaaa aaaaa aaaaaaa aaaaaaaaa aaaaaaaaa
                            aaaaa aaaaaa aaaaaaa aaaaa
                            aaaaaaa aaaaaa aaaaaa aaaaa aaaaaaaaa aaaaaaaaaa aaaa
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blue-200">
                                Elige tu plan
                            </Link>    
                        </div>
                    </Reveal>
                </div>
                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({id, icon, title, description}) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-gray-800">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-white">{title}</h4>
                                    <p className="text-gray-400">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
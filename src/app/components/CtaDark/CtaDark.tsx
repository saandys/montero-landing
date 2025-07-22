"use clients"

import Link from "next/link"
import { Reveal } from "../Reveal"

export function CtaDark() {
    return (
        <div className="px-6 py-20 md:mt-36">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-[#9f6f45] md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h1 className="text-5xl font-bold ">Antes de tirar, ¡pregunta sin compromiso!

                            </h1>

                        </Reveal>
                       
                    </div>
                    <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-[#83552d]">
                        <Reveal>
                            Empieza ahora
                        </Reveal>
                    </Link>
                </div>

            </div>

        </div>
    )
}
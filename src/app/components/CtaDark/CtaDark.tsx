"use clients"

import Link from "next/link"
import { Reveal } from "../Reveal"

export function CtaDark() {
    return (
        <div className="px-6 py-20 md:mt-36">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-gray-500 md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-5xl font-bold">Ven a probar nuestros servicios

                            </h3>

                        </Reveal>
                        <Reveal>
                            <p>Todo lo que necesitas para aaaaa aaaaaaaaaa aaaa aaaa
                                aaaaaa aaaaa aaa aaaa aaaa aaaaaaaa aaaaaaa aaaaa aaaaa
                                aaaa aaaaa aaaaaa aaaa aaa aaaaaaaa aaaa aaaaaa aaaaa
                            </p>
                        </Reveal>
                    </div>
                    <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blue-300">
                        <Reveal>
                            Empieza ahora
                        </Reveal>
                    </Link>
                </div>

            </div>

        </div>
    )
}
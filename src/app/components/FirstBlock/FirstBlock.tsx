"use client"
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            El nuevo
                            <span className="block degradedBlue text-blue-200">
                                banco digital
                            </span>
                            para todos
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Nuestro equipo de expertos aa aaa aaaaaaaa aaaaaa aaaa
                            aaaaaa aaa aaaaa aaaa aaaaa aaaaaaaaaa aaaaaa aaaaa aaa
                            saa aaaaaaaaaa aaa aaaaaaaaaaaa aaaaaaa aaaaa aaaaaaaaaa
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blue-200">Empieza ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center">
                    <Image src="/assets/cards-block.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
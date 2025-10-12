"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { dataCounter } from "./CounterData.data"
import { MotionTransition } from "../MotionTransition"
import { Playfair_Display } from "next/font/google"

export default function CounterData() {
  return (
    <div className="bg-[#946D47] w-full py-10 md:py-10"> {/* Fondo rectangular */}
  <MotionTransition className="max-w-7xl mx-auto">
    <div className="justify-between md:flex md:m-0 md:p-0 ">
      {dataCounter.map(({ id, startNumber, endNumber, text }) => (
        <CounterItem
          key={id}
          startNumber={startNumber}
          endNumber={endNumber}
          text={text}
        />
      ))}
    </div>
  </MotionTransition>
</div>

  )
}
const playfair = Playfair_Display ({
  weight: '400',
  subsets: ['latin'],
})

interface CounterItemProps {
    startNumber: number;
    endNumber: number;
    text: string;
  }
  
  function CounterItem({ startNumber, endNumber, text }: CounterItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
     <div
  ref={ref}
  className="relative flex flex-col items-center justify-center md:m-0 m-5 
              rounded-2xl border border-[#3d240f] 
              text-center p-8 shadow-[inset_0_0_20px_rgba(61,36,15,0.15)]
              transition-all duration-300 hover:shadow-[0_0_25px_rgba(214,184,140,0.25)]
              "
>
  <div className="text-[#3d240f] text-5xl font-semibold mb-2">
    +
    {isInView ? (
      <CountUp
        start={startNumber}
        end={endNumber}
        duration={1.5}
        className="text-[#3d240f]"
      />
    ) : (
      startNumber
    )}
  </div>

  <span
    className="text-[#4f3216] text-lg tracking-wide"
  >
    {text}
  </span>
</div>

    );
  }

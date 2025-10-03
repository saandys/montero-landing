"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { dataCounter } from "./CounterData.data"
import { MotionTransition } from "../MotionTransition"

export default function CounterData() {
  return (
    <div className="bg-[#f6d5b9] w-full py-10 md:py-24"> {/* Fondo rectangular */}
  <MotionTransition className="max-w-5xl mx-auto">
    <div className="justify-between md:flex">
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


interface CounterItemProps {
    startNumber: number;
    endNumber: number;
    text: string;
  }
  
  function CounterItem({ startNumber, endNumber, text }: CounterItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div ref={ref} className="py-3 text-2xl text-center md:text-left">
        +
        {isInView ? (
          <CountUp start={startNumber} end={endNumber} duration={1.5} className="text-[#ddae7c]"/>
        ) : (
          startNumber
        )}{" "}
        <span className="degradedBlue text-[#5b4329]">{text}</span>
      </div>
    );
  }

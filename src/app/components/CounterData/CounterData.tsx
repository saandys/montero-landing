"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { dataCounter } from "./CounterData.data"
import { MotionTransition } from "../MotionTransition"

export default function CounterData() {
  return (
    <MotionTransition className="max-w-5xl py-10 mx-auto md:py-64">
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
      <div ref={ref} className="py-5 text-2xl text-center md:text-left">
        +
        {isInView ? (
          <CountUp start={startNumber} end={endNumber} duration={1.5} />
        ) : (
          startNumber
        )}{" "}
        <span className="degradedBlue text-blue-200">{text}</span>
      </div>
    );
  }

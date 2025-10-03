"use client"

import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { CtaDark } from '../CtaDark'
import { MotionTransition } from '../MotionTransition'

export default function VideoBlock() {
    return (
        <MotionTransition>
        <div className="relative h-110 bg-[#674321]" id="servicios">
            
  <video
    src="/assets/video_repair.mp4"
    autoPlay
    loop
    muted
    className="w-full h-full object-cover opacity-45"
    style={{
      WebkitMaskImage: "url('/assets/mask7.png')",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "cover",
      WebkitMaskPosition: "center",
      maskImage: "url('/assets/mask7.png')",
      maskRepeat: "no-repeat",
      maskSize: "100% 100%",
    }}
  />

</div>
</MotionTransition>
   
    )
}

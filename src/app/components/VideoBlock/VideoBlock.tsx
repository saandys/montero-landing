"use client"

import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { CtaDark } from '../CtaDark'
import { MotionTransition } from '../MotionTransition'
import { ReactNode, useEffect, useRef, useState } from 'react'



type LazyLoadProps = {
  children: React.ReactNode
  rootMargin?: string
  threshold?: number
}

const LazyLoad = ({ children, rootMargin = "200px 0px", threshold = 0 }: LazyLoadProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin, threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, rootMargin, threshold])

  return <div ref={ref}>{isVisible ? children : null}</div>
}

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null
  return <>{children}</>
}

export default function VideoBlock() {
    return (
      <LazyLoad>
      <ClientOnly>
        <MotionTransition>
        <div className="relative h-110" id="servicios">
            
  <video
    src="/assets/video_repair.mp4"
    autoPlay
    loop
    muted
    playsInline
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
   </ClientOnly>
   </LazyLoad>
    )
}

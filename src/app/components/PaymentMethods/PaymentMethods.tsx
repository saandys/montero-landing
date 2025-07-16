"use client"

import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from './PaymentMethods.data'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { CtaDark } from '../CtaDark'

export default function PaymentMethods() {
    return (
        <div className="relative py-20 md:py-64" id="servicios">
            <BackgroundRadialRight />
            <div className="relative w-full overflow-hidden">
            <Swiper
            modules={[Autoplay]}
            breakpoints={{
                320: {
                slidesPerView: 2,
                spaceBetween: 15,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            speed={3000}
            loop={true}
            grabCursor={true}
            freeMode={true}
            >
            {dataPaymentMethods.map(({ id, image }) => (
                <SwiperSlide key={id} className="flex items-center justify-center">
                <Image
                    src={image}
                    alt="payment"
                    width={120}
                    height={60}
                    className="object-contain h-[60px] w-[120px]"
                />
                </SwiperSlide>
            ))}
            </Swiper>

            </div>
            <CtaDark />
        </div>
   
    )
}

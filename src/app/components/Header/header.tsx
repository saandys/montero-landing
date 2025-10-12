"use client"

import Image from "next/image"
import Link from "next/link"
import {RiMenu3Line} from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"
import {MotionTransition} from "../MotionTransition/"
import { FloatingDock } from "@/components/ui/floating-dock";
import { Text } from "lucide-react"
import { Icon12Hours, IconBasketDollar, IconBrandSnowflake, IconHome, IconPhone, IconTool, IconTools } from "@tabler/icons-react"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const links = [
    {
      title: "Inicio",
      icon: (
       <IconHome></IconHome>
      ),
      href: "#home",
    },
 
    {
      title: "Servicios",
      icon: (
        <IconTool></IconTool>
      ),
      href: "#services",
    },
    {
      title: "Especial",
      icon:(
        <IconBrandSnowflake></IconBrandSnowflake>
      ),
      href: "#other",
    },
    {
      title: "Tarifas",
      icon: (
       <IconBasketDollar></IconBasketDollar>
      ),
      href: "#prices",
    },
    {
      title: "Contacto",
      icon: (
       <IconPhone></IconPhone>
      ),
      href: "#contact",
    },
   
  ];
  
    return (
        <MotionTransition>
          {/* <nav className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:py-8">
                <Link href="/home" className="flex items-center">
                    <Image src="/images/logo.png" width="150" height="40" alt="Logo"/>
                </Link>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)}></RiMenu3Line>
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataHeader.map(({id, name, idLink}) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                                <Link href={idLink} className="tetxt-lg hover:text-blue-400">{name}</Link>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </nav>*/}
            <div className="lg:flex hidden items-center justify-center md:h-20 w-full pt-10">
      <FloatingDock
        items={links}
      />
    </div>
        </MotionTransition>
    )
}
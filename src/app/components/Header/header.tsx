"use client"

import Image from "next/image"
import Link from "next/link"
import {RiMenu3Line} from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"
import {MotionTransition} from "../MotionTransition/"
import { FloatingDock } from "@/components/ui/floating-dock";
import { Text } from "lucide-react"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const links = [
    {
      title: "Home",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Contacto"
        />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon:(
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
   
  ];
  
    return (
        <MotionTransition>
          {/* <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
                <Link href="/home" className="flex items-center">
                    <Image src="/assets/logo.png" width="150" height="40" alt="Logo"/>
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
            <div className="flex items-center justify-center h-20 w-full my-7">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
        </MotionTransition>
    )
}
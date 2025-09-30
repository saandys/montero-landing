import Image from "next/image";
import { Reveal } from "../Reveal";
import Link from "next/link";
import { footerData, footerSocialNetworks } from "./Footer.data";


export function Footer() {
    return (
            


<footer className="rounded-lg shadow-sm">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                               <Image src="/assets/logo.png" width={200} height={40} alt="Logo Bank" />

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Nosotros</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Política de privacidad</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licencia</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Zapateria Montero. All Rights Reserved</span>
    </div>
</footer>



    )
}
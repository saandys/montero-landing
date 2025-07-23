"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export function ControlBilling(){
    return (
        <div id="prices" className="p-4 py-20 md:py-34">
        <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto place-content-evenly items-stretch">
          
          {/* Columna izquierda: tabla */}
          <MotionTransition className="flex-1 p-6 md:p-8">
            <div className="flex flex-col h-full">
              <div className="-m-1.5 overflow-x-auto">
                <div className="overflow-x-auto py-8 px-4 h-full">
                  <div className="min-w-full max-w-3xl mx-auto shadow-lg rounded-2xl border border-[#e6cbb5] bg-[#e6cbb5] overflow-hidden h-full">
                    <table className="min-w-full text-sm text-left font-light">
                      <thead className="bg-[#e4a674] text-[#5a4332] uppercase tracking-wider text-xs">
                        <tr>
                          <th className="px-6 py-4">Servicio</th>
                          <th className="px-6 py-4 text-right">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Tapas Aguja', '4€'],
                          ['Tapas cuadradas', 'Desde 4€'],
                          ['Arreglo de bolsos', 'Desde 6€'],
                          ['Tintar', '8€'],
                          ['Pegar', 'Desde 5€'],
                          ['Botones pantalón', '2€'],
                          ['Poner alzas', 'Desde 8€'],
                          ['Horma', '4€'],
                          ['Media suelas mujer', '8€'],
                          ['Media suelas caballero', '10€'],
                          ['Correa caballero', '20€'],
                        ].map(([servicio, precio], idx) => (
                          <tr key={idx} className="hover:bg-[#debea4] transition duration-200 ease-in-out">
                            <td className="px-6 py-4 text-[#3b2a1a] font-medium">{servicio}</td>
                            <td className="px-6 py-4 text-right text-[#3b2a1a] font-semibold">{precio}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </MotionTransition>
          <MotionTransition>
          {/* Columna derecha: texto + imagen */}
          <div className="flex-1 p-6 md:p-8 flex flex-col h-full">
            <Reveal>
              <h2 className="text-5xl font-semibold">
                <span className="text-[#e4a674]">Calidad artesanal</span> <br /> al mejor precio
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-md mt-10">
                Consulta nuestras tarifas y descubre un servicio profesional con atención al detalle, materiales de alta calidad y precios justos. Trabajamos con total transparencia.
              </p>
              </Reveal>
              {/* Imagen contenida en altura */}
              <div className="flex items-center justify-center flex-1 mt-10 max-h-full">
                <Image
                    src="/assets/depie2.png"
                    alt="Card"
                    width={250}
                    height={250}
                    className="object-contain"
                />
                </div>

           
          </div>
          </MotionTransition>
        </div>
        
      </div>
      

    )
}
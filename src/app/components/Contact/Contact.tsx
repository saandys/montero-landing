import React, { useState } from "react";
import { Reveal } from "../Reveal";
import { dataContactItems } from "./Contact.data";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Gasoek_One } from "next/font/google";


const gasoekOne = Gasoek_One({ subsets: ['latin'], weight: '400' })


const Contact = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

   const whatsappNumber = "34690151736"; // tu número
  const text = `¡Hola! \nMe quería poner en contacto con vosotros porque... \n¡Espero tu respuesta pronto! `;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  
  return (
    <div className="flex items-center justify-center m-9 "  id="contact">
      <div className=" px-6 py-10 md:py-18 bg-[#946D47] w-5xl rounded-4xl">
        <div className="grid max-w-7xl mx-auto md:grid-cols-2 ">
              <div className="pl-8 md:mt-0 mt-5 md:pl-20 mb-12 max-w-[570px] lg:mb-0 mr-4">
                <Reveal>
                    <h2 className={`text-5xl font-semibold ${gasoekOne.className}`}>Contacta con
                        <span className={`block text-[#e4a674] ${gasoekOne.className}`}> nosotros</span>
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="md:max-w-md  mt-10"><strong>¿Tienes dudas o necesitas más información?</strong><br/><br/>
                    ¡Estamos aquí para ayudarte! No dudes en llamarnos o escribirnos. Nuestro equipo está disponible para atenderte de manera rápida y cercana, ya sea por teléfono, correo electrónico o enviándonos un mensaje directo por WhatsApp.<br/><br/>¡Será un placer ayudarte en todo lo que necesites!
                    </p>
                </Reveal>
              
              </div>
            
              <div className="relative md:mt-20 w-full md:ml-0" id="formatos">
                  <div className="grid items-center justify-center pt-6 md:p-8 ">
                    {dataContactItems.map(({id, icon, title, description}) => (
                        <Reveal key={id}>
                        <div className="my-5 ml-10 md:mt-5 md:m-0 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-[#946D47]/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <img src={`/images/${icon}.png`} alt={title} width={60} height={60} />
                    
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      {title}
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      {description}
                    </p>
                  </div>
                </div>
                        </Reveal>
                        
                    ))}
  <div className="pt-6">
 <Reveal>
                      <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-80 items-center justify-center px-4 py-2 text-white bg-green-600/70 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <FaWhatsapp className="mr-2 text-lg" />
                          Envíanos un mensaje
                        </Link>
                    </Reveal>
  </div>
                   
                </div>
                
               
                {/*<form onSubmit={handleSubmit} className="rounded-lg bg-[#9f6f4584] mt-4 p-6 shadow-lg dark:bg-dark-2 sm:p-12">
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white">
                      ¿Tienes dudas? 
                    </h3>
                    <h3 className="mb-6 text-md text-dark dark:text-white">
                      Escríbenos directamente en Whatssap <br/>
                    </h3>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}

                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Introduce tu mensaje"
                    name="details"
                    defaultValue=""
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  />
                  <div>
                   <button
                      type="submit"
                      className="w-full rounded border cursor-pointer border-primary bg-primary/100 p-3 text-white transition hover:bg-primary/90"
                    >
                      Enviar
                    </button>
                  </div>
                </form>*/}
                
              </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
type ContactTextAreaProps = {
    row?: string;
    placeholder?: string;
    name: string;
    defaultValue?: string;
    type?:string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
  
  const ContactTextArea = ({ row, placeholder, name, defaultValue, onChange }: ContactTextAreaProps) => {
   return (
    <>
      <div className="mb-6">
        <textarea
          rows={Number(row)}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </>
  );
};

type ContactInputProps = {
    row?: string;
    placeholder?: string;
    name: string;
    defaultValue?: string;
    type?:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

const ContactInputBox = ({ type, placeholder, name, onChange }: ContactInputProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          onChange={onChange}

        />
      </div>
    </>
  );
};

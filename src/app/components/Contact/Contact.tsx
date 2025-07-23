import React from "react";
import { Reveal } from "../Reveal";
import { dataContactItems } from "./Contact.data";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="relative py-20 md:py-64">
        <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
              <div className="mb-12 max-w-[570px] lg:mb-0 mr-4">
                <Reveal>
                    <h2 className="text-5xl font-semibold">Contacta con
                        <span className=" text-[#e4a674]"> nosotros</span>
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="max-w-md mt-10">Nos especializamos en trabajos artesanales de alta calidad para alargar la vida útil de tus artículos favoritos.
                    </p>
                </Reveal>
                <div className="grid items-center pt-3 md:p-8">
                    {dataContactItems.map(({id, icon, title, description}) => (
                        <Reveal key={id}>
                        <div className="my-5 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <Image src={`/assets/${icon}.png`} alt={title} width={60} height={60} />
                    
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
                </div>
                
              </div>
            
              <div className="relative rounded-lg bg-[#9f6f4584] mt-4 p-6 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Nombre"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Introduce tu mensaje"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
                
              </div>
          </div>
      </section>
    </>
  );
};

export default Contact;
type ContactTextAreaProps = {
    row?: string;
    placeholder?: string;
    name: string;
    defaultValue?: string;
    type?:string;
  };
  
  const ContactTextArea = ({ row, placeholder, name, defaultValue }: ContactTextAreaProps) => {
   return (
    <>
      <div className="mb-6">
        <textarea
          rows={Number(row)}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }: ContactTextAreaProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};

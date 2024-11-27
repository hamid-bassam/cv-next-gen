import Image from 'next/image';
import React from "react";
import pp from './assets/img/pp Hamid-B.png';

const ProfilImageComponent = React.forwardRef<HTMLDivElement, { onClick: () => void }>(({ onClick, ...props }, ref) => {

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="relative cursor-pointer"
      {...props}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative ml-auto overflow-hidden w-36 h-36 max-w-xs max-md:w-56 max-md:h-56 rounded-full bg-gradient-to-r from-sky-300 to-violet-400 hover:scale-125  transition-transform duration-300 hover:shadow-white hover:brightness-105 ease-in-out">

        <Image src={pp} alt="hamid BASSAM" className="absolute object-center w-auto h-full scale-110 translate-x-8 translate-y-5 max-md:translate-x-12 max-md:translate-y-12 " />
      </div>
    </div >
  );
});

ProfilImageComponent.displayName = "ProfilImageComponent";

export default ProfilImageComponent;
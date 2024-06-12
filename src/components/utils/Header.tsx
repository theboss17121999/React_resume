import { Reveal } from "./Reveal";
import React, { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children: JSX.Element;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
      <div>
        <div className="flex flex-col justify-center items-center">
          <Reveal>
            <div className='py-2'>
              <p className="text-3xl md:text-5xl font-display2 text-gray-700">{title}</p>
            </div>
          </Reveal>
          <div className="pt-3">
            <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
          <Reveal>
            <p className="text-lg md:text-xl text-center text-slate-600 font-medium">{children}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

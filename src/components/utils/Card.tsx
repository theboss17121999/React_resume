import React from "react";
import '../../App.css';
import accenture from '../utils/assets/Accenture-Logo.png';
import cognizant from '../utils/assets/cognizant.svg';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <>
      <div className="card">
        {title === "Cognizant" && (
          <img className="h-32" src={cognizant} alt="Cognizant Logo" />
        )}
        {title === "Accenture" && (
          <img className="h-32" src={accenture} alt="Accenture Logo" />
        )}
        <div className="card__content">
          <p className="card__title">{title}</p>
          <div className="card__description">{children}</div>
        </div>
      </div>
    </>
  );
};

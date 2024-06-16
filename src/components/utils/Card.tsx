import React from "react";
import '../../App.css';
import cognizant from '../../assets/educationLogo/cognizant.svg';

interface CardProps {
  title: string;
  children: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <>
      <div className="card">
        <img className="h-32" src={cognizant} alt="Cognizant Logo" />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{children}</p>
        </div>
      </div>
    </>
  );
};

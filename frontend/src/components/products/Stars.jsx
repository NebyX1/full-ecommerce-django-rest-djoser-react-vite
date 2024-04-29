import React from 'react';

//? Importamos las estrellas sólidas y vacías de React Icons
import { FaStar, FaRegStar } from "react-icons/fa";

//? Importamos el componente de estilos de css modules
import styles from "../../../static/styles/stars.module.css";

const StarRating = ({ stars }) => {
  const totalStars = 5;
  let normalizedStars = stars; // Valor de estrellas normalizado
  let starDisplay = [];

  //? Normalizar el valor de estrellas a 1 si es menor a 1 o a 5 si es mayor a 5, de lo contrario redondear
  if (normalizedStars < 1) {
    normalizedStars = 1;
  } else if (normalizedStars > totalStars) {
    normalizedStars = totalStars;
  } else {
    normalizedStars = Math.round(stars);
  }

  //? Añadir estrellas completas hasta el valor normalizado
  for (let i = 1; i <= normalizedStars; i++) {
    starDisplay.push(<FaStar key={`star_${i}`} className={`${styles.starColor}`} />);
  }

  //? Añadir estrellas vacías partiendo del valor normalizado hasta 5, si es que el valor normalizado es menor a 5
  //? Le sumamos 1 al valor normalizado para que no se repita la estrella que ya se agregó en el ciclo anterior 
  //? y empiece a agregar estrellas vacías desde la siguiente posición
  for (let i = normalizedStars + 1; i <= totalStars; i++) {
    starDisplay.push(<FaRegStar key={`star_${i}`} className={`${styles.starColor}`} />);
  }

  return <div>{starDisplay}</div>;
};

export default StarRating;
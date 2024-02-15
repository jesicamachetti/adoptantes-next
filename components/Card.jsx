import React from "react";
import Image from "next/image";

import style from "./../styles/card.module.css";

const Card = ({ imagen, nombre, raza, edad, tamano, genero, localidad }) => {
  return (
    <div className={style.cardContainer}>
      <Image
        width={500}
        height={200}
        src={imagen[0]}
        alt="mascota"
        objectFit="cover"
      />
      <div className={style.dataContainer}>
        <h5 className={style.name}>{nombre}</h5>
        <div>
          <p>Raza: {raza}</p>
          <p>Edad: {edad}</p>
          <p>Tamaño: {tamano}</p>
          <p>Genero: {genero}</p>
          <p>Localidad: {localidad}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

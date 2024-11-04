import React from 'react';
import cardsImage from "@/assets/cartas.png"


const ORIGINAL_CARD_WIDTH = 2496 / 12;
const ORIGINAL_CARD_HEIGHT = 1595 / 5; 

interface CardProps {
    row: number,
    col: number,
    scale: number,
    className?: String
}

const Card = ({ row, col, scale, className }: CardProps) => {
  const CARD_WIDTH = ORIGINAL_CARD_WIDTH * scale
  const CARD_HEIGHT = ORIGINAL_CARD_HEIGHT * scale
  const backgroundPositionX = -(col - 1) * CARD_WIDTH ;
  const backgroundPositionY = -(row - 1) * CARD_HEIGHT;

  return (
    <div className={`${className} relative w-10 rounded-md shadow-md shadow-orange-700`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundImage: `url(${cardsImage.src})`,
        backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
        backgroundSize: `${2496 * scale}px ${1595*scale}px`,
      }}
    />
  );
};

export default Card;
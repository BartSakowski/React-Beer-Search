import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import BeerCard from './BeerCard';
import BeerCardBack from './BeerCardBack';

const CardFlipper = props => {

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setFlipped(
      isFlipped => !isFlipped
    )

  }

  return (
    <div>
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <BeerCard card={props.card} handleFlip={handleFlip}/>
      <BeerCardBack card={props.card} handleFlip={handleFlip}/>
    </ReactCardFlip>
    
    </div>
  )
}

export default CardFlipper;
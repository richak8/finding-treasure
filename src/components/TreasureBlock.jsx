import React, { useState, useEffect } from 'react';

const TreasureBlock = ({getTreasure}) => {
  const [treasure, setTreasure] = useState(0);   

  const handleSetTreasure = () => {
    if(treasure === 'X') {
      setTreasure(0);
    } else {
      setTreasure('X');
    }
  }

  useEffect(() => {
    getTreasure(treasure);
  }, [treasure]);

  return (
    <div 
      className="treasureBlock"
      onClick={handleSetTreasure}
    >
     {treasure === 'X' && treasure}
    </div>
  )
}

export default TreasureBlock;
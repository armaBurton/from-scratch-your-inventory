import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../WeaponCard.css';

export default function WeaponCard({ weapon }){
  const [color, setColor] = useState('');

  useEffect(() => {
    switch (weapon.rarity) {
      case 'Poor':
        setColor('lightgrey');
        break;
      case 'Common':
        setColor('grey');
        break;
      case 'Uncommon':
        setColor('lightgreen');
        break;
      case 'Rare':
        setColor('blue');
        break;
      case 'Epic':
        setColor('purple');
        break;
      case 'Legendary':
        setColor('orange');
        break;
    }
  }, [weapon]);

  return (
    <Link className='weapon-card-link' to={`.inventory/${weapon.id}`}>
      <div className="weapon-card">
        <h1 style={{ color: color }}>{weapon.name}</h1>
        <div className="type-damage">
          <p className="weapon-type">{weapon.hand} {weapon.type}</p>
          <p className="dps">{weapon.dps.toFixed(2)}dps</p>
        </div>
      </div>
    </Link>
  );
}


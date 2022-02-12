import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../WeaponDetail.css';
import { getWeaponById } from '../services/fetch-utils';

export default function WeaponDetail(){
  const [weapon, setWeapon] = useState({});
  const [imageName, setImageName] = useState('');
  const history = useHistory();
  const params = useRouteMatch();

  useEffect(() => {
    async function getWeapon(){
      const data = await getWeaponById(params.params.id);
      setWeapon(data);
    }

    getWeapon();
  }, [params]);

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
    handleImage();
  }, [weapon.rarity]);

  function handleImage(){
    if (weapon.type === 'Sword' || weapon.type === 'Mace' || weapon.type === 'Axe') {
      const temp = `${weapon.hand}-${weapon.type}.png`;
      setImageName(temp);
    } else {
      const temp = `${weapon.type}.png`;
      setImageName(temp);
    }
  }

  return (
    <div className="weapon-detail-card" onClick={() => history.push('/')}>
      <img className='weapon-image' src={`/${imageName}`} alt={imageName} />
      <div className="details">
        <h1 className="detail-name" style={{ color : color }}>{weapon.name}</h1>
        <p className='item-level'>Item Level {weapon.item_level}</p>
        <p className="bop">{weapon.bind}</p>
        <div className="row-space-between">
          <p className="hand">{weapon.hand}</p>
          <p className="shape">{weapon.type}</p>
        </div><div className="row-space-between">
          <p className="min-max">{weapon.min_damage} - {weapon.max_damage} Damage</p>
          <p className="speed">Speed {weapon.speed}</p>
        </div>
        <p className="dps">({Number.parseFloat(weapon.dps).toFixed(2)} damage per second)</p>
        <p className="durability">Durability {weapon.durability}/{weapon.durability}</p>
        <p className="level-req">Requires Level {weapon.level_req}</p>
        <p className="description">{weapon.description}</p>
        <p className="sell-price">Sell Price <span className="gold">{weapon.gold}g</span> <span className="silver">{weapon.silver}s</span> <span className="copper">{weapon.copper}c</span></p>
      </div>
    </div>
  );
} 

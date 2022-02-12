import { useRouteMatch, link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../WeaponDetail.css';

export default function WeaponDetail(){
  const history = useHistory();
  const param = useRouteMatch();
  console.log(param);

  return (
    <div className="weapon-detail-card" onClick={history.push('/inventory')}>
      <h1 className="name">zzsvdfvzsd</h1>
    </div>
  );
} 


{/* <h3 style={{ color: color }}>{weapon.name}</h3>
<p className='item-level'>Item Level {weapon.item_level}</p>
<p className="bop">{weapon.bind}</p>
<div className="row-space-between">
  <p className="hand">{weapon.hand}</p>
  <p className="shape">{weapon.type}</p>
</div>
<div className="row-space-between">
  <p className="min-max">{weapon.min_damage} - {weapon.max_damage} Damage</p>
  <p className="speed">Speed {weapon.speed.toFixed(2)}</p>
</div>
<p className="dps">({weapon.dps.toFixed(2)} damage per second)</p>
<p className="durability">Durability {weapon.durability}/{weapon.durability}</p>
<p className="level-req">Requires Level {weapon.level_req}</p>
<p className="sell-price">Sell Price <span className="gold">{weapon.gold}g</span> <span className="silver">{weapon.silver}s</span> <span className="copper">{weapon.copper}c</span></p> */}
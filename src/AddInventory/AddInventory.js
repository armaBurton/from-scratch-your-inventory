import { useEffect, useState } from 'react';
import '../AddInventory.css';
import { createWeapon } from '../services/fetch-utils';
// import { useHistory } from 'react-router-dom';

export default function AddInventory(){
  const [name, setName] = useState('');
  const [rarity, setRarity] = useState('');
  const [type, setType] = useState('');
  const [itemLevel, setItemLevel] = useState(0);
  const [bind, setBind] = useState('');
  const [hand, setHand] = useState(`One-Hand`);
  const [minDamage, setMinDamage] = useState(0);
  const [maxDamage, setMaxDamage] = useState(minDamage);
  const [speed, setSpeed] = useState(3.6);
  const [dps, setDps] = useState(0);
  const [stats, setStats] = useState([]);
  const [durability, setDurability] = useState(100);
  // const [magicEffect, setMagicEffect] = useState('');
  const [levelReq, setLevelReq] = useState(1);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [copper, setCopper] = useState(0);
  // const history = useHistory();

  function getSpeed(hand, type){
    console.log(type);

    setSpeed(1.8);
    if (type === 'Dagger'){
      console.log(speed);
    }


  }

  useEffect(() => {
    console.log(speed, dps);
    handleSubmit();
  }, [dps]);

  function calculateDPS() {
    const sum = (minDamage + maxDamage);
    const divSpeed = sum / speed;
    const average = divSpeed / 2;
    setDps(average);
  }

  function calculateState(e){
    e.preventDefault();
    if (type === 'Dagger'){
      setSpeed(1.8);
    } else if (type === 'Wand'){
      setSpeed(2.0);
    } else if (type === 'Crossbow' || type === 'Bow' || type === 'Gun') {
      setSpeed(3.0);
    } else if (hand === 'One-hand'){
      setSpeed(2.6);
    } else if (hand === 'Two-hand'){
      setSpeed(3.6);
    }

    calculateDPS();
  }
  
  async function handleSubmit() {

    await createWeapon({
      name,
      rarity,
      item_level: itemLevel,
      hand,
      type,
      bind,
      min_damage: minDamage,
      max_damage: maxDamage,
      durability,
      level_req:levelReq,
      gold, 
      silver,
      copper
    });
  }

  return (
    <div className='create'>
      <form onSubmit={calculateState}>
        <h1>RPG Weapon Creator</h1>
        <label>
          Name:
          <input required value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          Rarity:
          <select value={rarity} onChange={e => setRarity(e.target.value)}>
            <option className='poor'>Poor</option>
            <option className='common'>Common</option>
            <option className='uncommon'>Uncommon</option>
            <option className='rare'>Rare</option>
            <option className='epic'>Epic</option>
            <option className='legendary'>Legendary</option>
          </select>
        </label>
        <label>
          Item Level:
          <input type="number" required value={itemLevel} onChange={e => setItemLevel(e.target.value)}/>
        </label>
        <label>
          Hand:
          <select required value={hand} onChange={e => setHand(e.target.value)} >
            <option>One-hand</option>
            <option>Two-hand</option>
          </select>
        </label>
        <label>
          Type:
          <select required value={type} onChange={e => setType(e.target.value)}>
            <option>Dagger</option>
            <option>Fist</option>
            <option>Axe</option>
            <option>Mace</option>
            <option>Sword</option>
            <option>Stave</option>
            <option>Bow</option>
            <option>Crossbow</option>
            <option>Gun</option>
            <option>Wand</option>
          </select>
        </label>
        <label>
          Bind:
          <select required value={bind} onChange={e => setBind(e.target.value)}>
            <option>Bind on Pickup</option>
            <option>Bind on Equip</option>
            <option>No Bind</option>
          </select>
        </label>
        <label>
          Min Damage:
          <input required type='number' placeholder={minDamage} onChange={e => setMinDamage(e.target.value)} />
        </label>
        <label>
          Max Damage:
          <input required type='number' placeholder={maxDamage} onChange={e => setMaxDamage(e.target.value)} />
        </label>
        <label>
          Durability:
          <input required type='number' value={durability} onChange={e => setDurability(e.target.value)} />
        </label>
        <label>
          Character Level Required:
          <input type="number" required value={levelReq} onChange={e => setLevelReq(e.target.value)}/>
        </label>
        <label>
          Description:
          <textarea className='description' />
        </label>
        <div className='value'>
          <label className='column'>
            Gold:
            <input type="number" className='money' value={gold} onChange={e => setGold(e.target.value)} />
          </label>
          <label className='column'>
            Silver:
            <input type="number" className='money' value={silver} onChange={e => setSilver(e.target.value)} />
          </label>
          <label className='column'>
            Copper:
            <input type="number" className='money' value={copper} onChange={e => setCopper(e.target.value)} />
          </label>
        </div>
        <button>Create Weapon</button>
      </form>
    </div>
  );
}
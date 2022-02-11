import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddInventory({ user }){
  const [name, setName] = useState('');
  const [rarity, setRarity] = useState('');
  const [type, setType] = useState('');
  const [itemLevel, setItemLevel] = useState(0);
  const [bind, setBind] = useState('');
  const [hand, setHand] = useState(`One-Hand`);
  const [minDamage, setMinDamage] = useState(0);
  const [maxDamage, setMaxDamage] = useState(minDamage);
  const [speed, setSpeed] = useState(3.6);
  // const [stats, setStats] = useState([]);
  const [durability, setDurability] = useState([]);
  // const [magicEffect, setMagicEffect] = useState('');
  const [levelReq, setLevelReq] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [copper, setCopper] = useState(0);

  function getSpeed(hand, type){
    console.log(type);

    if (type === 'Dagger'){
      setSpeed(1.8);
      console.log(true);
    }


  }


  async function handleSubmit(e) {
    e.preventDefault;
    getSpeed('hand', 'Dagger');
    console.log(speed);

  }


  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
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
          <input required value={minDamage} onChange={e => setMinDamage(e.target.value)} />
        </label>
        <label>
          Max Damage:
          <input required value={maxDamage} onChange={e => setMaxDamage(e.target.value)} />
        </label>
        <label>
          Durability:
          <input required value={durability} onChange={e => setDurability(e.target.value)} />
        </label>
        <label>
          Character Level Required:
          <input type="number" required value={levelReq} onChange={e => setLevelReq(e.target.value)}/>
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
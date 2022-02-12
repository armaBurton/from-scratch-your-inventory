import { useEffect } from 'react';
import { getWeapons } from '../services/fetch-utils';
import { useState } from 'react';
import WeaponCard from '../WeaponCard/WeaponCard';

export default function Inventory(){
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function fetchWeapons(){
      const data = await getWeapons();

      setWeapons(data);
    }
    fetchWeapons();

  }, []);

  return (
    <div className='inventory'>
      {
        weapons.map((weapon, i) => <WeaponCard key={weapon + i} weapon={weapon} />)
      }
    </div>
  );
}
import { useEffect } from 'react';
import { getWeapons } from '../services/fetch-utils';
import { useState } from 'react';

export default function Inventory(){
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function fetchWeapons(){
      const data = await getWeapons();

      setWeapons(data);
    }
    fetchWeapons();

    console.log(weapons);
  }, []);

  return (
    <div className='inventory'></div>
  );
}
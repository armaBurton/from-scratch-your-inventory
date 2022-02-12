import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../WeaponDetail.css';
import { getWeaponById } from '../services/fetch-utils';

export default function WeaponDetail(){
  const [weapon, setWeapon] = useState({});
  const history = useHistory();
  const params = useRouteMatch();

  useEffect(() => {
    async function getWeapon(){
      const data = await getWeaponById(params.params.id);
      setWeapon(data);
      console.log('||', weapon);
    }

    getWeapon();
  }, []);

  return (
    <div className="weapon-detail-card" onClick={() => history.push('/')}>
      <h1 className="name">zzsvdfvzsd</h1>
    </div>
  );
} 

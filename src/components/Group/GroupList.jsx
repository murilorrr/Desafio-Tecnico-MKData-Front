import React, { useEffect, useContext } from 'react';
import {
  getAllGroups,
} from '../../fetches';
import GroupCard from './GroupCard';
import { GlobalContext } from '../../contexts/GlobalContext';

function GroupList() {
  const { setGroups, groups } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllGroups();
      setGroups(response);
    };
    fetchData();
  }, []);
  return (
    <article>
      <h1>LISTAGEM DE GRUPOS</h1>
      <div>
        { groups.length >= 1 ? groups
          .map((group, index) => (
            <GroupCard
              group={group}
              key={group.id}
              index={index}
            />
          )) : <div>Nenhum Groupo ainda</div>}
      </div>
    </article>
  );
}

export default GroupList;

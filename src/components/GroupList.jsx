import React, { useEffect, useState } from "react";
import {
  getAllGroups,
} from '../fetches';
import GroupCard from './GroupCard';

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllGroups();
      console.log(response);
      setGroups(response);
    };
    fetchData();
    return () => {
      setGroups([]);
    };
  }, []);
  return(
    <article>
      <h1>LISTAGEM DE GRUPOS</h1>
      <div>
      { groups.length >= 1 ? groups
        .map((group, index) => (<GroupCard
          group={ group }
          key={ index }
          index={ index }
        />)) : <div>Nenhum Groupo ainda</div>}
      </div>
    </article>
  );
}

export default GroupList;
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

export const   Buscador = ({route}) =>  {
  const { updateSearchTerm } = useContext(SearchContext);
  const [tempSearch, setTempSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('handleSearch foi chamado');
    updateSearchTerm(tempSearch);
    navigate(`${route}${tempSearch}`);

  };
  console.log('tempSearch:', tempSearch);
  return (
    <div>
      <input
        type="text"
        value={tempSearch}
        onChange={(e) => setTempSearch(prev => e.target.value)}

      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}



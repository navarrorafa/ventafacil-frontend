import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

export const Buscador = ({ route }) => {
  const { updateSearchTerm } = useContext(SearchContext);
  const [tempSearch, setTempSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();  // Isso previne o recarregamento da página na submissão do formulário
    updateSearchTerm(tempSearch);
    navigate(`${route}${tempSearch}`);
    setTempSearch('');  // Isso limpa o campo de busca
  };

  // console.log('tempSearch:', tempSearch);

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

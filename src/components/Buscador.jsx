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
    <form className="form-control d-flex bg-dark" onSubmit={handleSearch}>
      <input
      className='form-control text-center'
        type="text"
        placeholder='Encuentra lo que buscas'
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
      />
      <button className='text-end btn btn-primary m-2' type="submit">Buscar</button>
    </form>
  );
};

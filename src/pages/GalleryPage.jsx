
import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useResultado } from '../hooks/useResultado';



function GalleryPage() {
  console.log('GalleryPage renderizada');
  const { searchTerm } = useContext(SearchContext);
  const { data, loading } = useResultado(`http://localhost:3000/api/v1/users/uid/`, searchTerm , "POST");

  console.log('Search Term:', searchTerm); 
  console.log('Data:', data);  // Log the data
  console.log('Loading:', loading);  // Log the loading state
  return (
    <div>
      
      
      {loading ? 'Carregando dados...' : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default GalleryPage;

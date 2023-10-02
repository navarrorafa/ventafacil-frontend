import { useState, useEffect } from 'react';
import { dataFetch } from '../helpers/dataFetch';

export const useFetchUser = (url) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const responseData = await dataFetch(url, 'GET');
      if (responseData.ok) {
        setUser(responseData.data);
      } else {
        console.error('Erro ao buscar dados do usuário:', responseData.msg);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, [url]);

  return { user, loading };
};

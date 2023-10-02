import { useState } from "react";
import { dataFetch } from "../../helpers/dataFetch";



export const useUserManager = () => {
    const [data, setData] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    const createUser = async (newUser, url) => {
        try {
            console.log("new user url", newUser, url);
            const response = await dataFetch(url, 'POST', newUser);
    
            if (!response.ok) {
                
                throw new Error('Erro ao criar o usuário.');
            }
            
            console.log('Usuário criado com sucesso!', response);
            setData([...data, { ok: true, ...response.data, msg: "Usuário criado com sucesso" }]);

        } catch (error) {
      
            return setData([...data, { ok: false, msg: error.message }]);
        }
    };
    
    const updateUser = async (updatedUser, url) => {
        //
        const response = await dataFetch(url, 'PUT', updatedUser);
       console.log(response)
        if (response) {
         
            // Atualize o estado 'data' com os dados atualizados, se necessário
            const updatedData = data.map((user) =>
                user.id === response.id ? response : user
            );
            setData([...data, { ok: true, ...response.data, msg: "Usuário criado com sucesso" }]);
        } else {
            return setData([...data, { ok: false, msg: error.message }])
        }
    };
    

    const deleteUser = async (userId) => {
        // Implemente a lógica de exclusão do usuário aqui
        const url = `http://localhost:3000/api/v1/users/${userId}`; 
        const response = await dataFetch(url, 'DELETE');

        if (response) {
            console.log('Usuário excluído com sucesso!', response);
            // Adicione lógica adicional, se necessário
        } else {
            console.error('Erro ao excluir o usuário.');
        }
    };

    const onSubmit = async (userData) => {
        if (isEditMode) {
            await updateUser(userData);
        } else {
            await createUser(userData);
        }
    };

    return {
        data,
        isEditMode,
        createUser,
        updateUser,
        deleteUser,
        onSubmit,
    };
};
import { useState } from 'react';

export const useForm = (initialValue = {}) => {

    const [data, setData] = useState(initialValue);
    const [submited, setSubmited] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const serialForm = (form) => {
        const formData = new FormData(form);
        //if (!file) {
         //   formData.append('image', file);
       // }
        console.log({ formData })
       // const objData = {}

        for (let [field, value] of formData) {
          
            objData[field] = value;
        };
       // const newObjData = {
        //    ...objData,
        //    imagen_anuncio: file.name
       // }
        //console.log({newObjData})
         return objData;
        //return newObjData

    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const objData = serialForm(ev.target);

        setData(objData);
        setSubmited(true);
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        // if (!data) return

        setData({
            ...data,
            [name]: value
        });
    };

    return {
        data,
        submited,
        file,
        handleSubmit,
        handleChange,
        handleFileChange,
        
    };
};

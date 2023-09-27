import { useState } from 'react';

export const useForm = (initialValue = null) => {

    const [data, setData] = useState(initialValue);
    const [submited, setSubmited] = useState(false);

    const serialForm = (form) => {
        const formData = new FormData(form);
        const objData = {}

        for (let [field, value] of formData) {
            objData[field] = value;
        };

        return objData;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const objData = serialForm(ev.target);

        setData(objData);
        setSubmited(true);
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (!data) return

        setData({
            ...data,
            [name]: value
        });
    };

    return {
        data,
        submited,
        handleSubmit,
        handleChange
    };
};

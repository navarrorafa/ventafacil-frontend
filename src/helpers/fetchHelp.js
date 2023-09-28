

export const fetchHelp = async (url, method = 'GET', data) => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Request fallido: ${response.status}`);
        }

        const result = {
            ok: true,
            data: await response.json(),
            msg: 'Petición exitosa'
        };


        console.log(result);

        return result;
    } catch (error) {


        console.error('Error:', error);
        return { ok: false, msg: error.message };
    }
}

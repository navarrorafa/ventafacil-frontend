
export const dataFetch = async (url, method, body = {}, files = false) => {

    let data;
  
    let options = {};
    let newData = {}

    if (files) {
        newData = { ...body, files }
    } else {
        newData = { ...body }
    }


    try {



        if (method == "POST" || method == "PUT") {
            console.log("entra en post", newData)
            options = {
                method: method,
                body: JSON.stringify(newData),
                headers: {
                    "Content-type": "application/json",
                }
            }
        }

        if (method == "DELETE") {
            options = {
                method: method
            }
        }

        if (method === "GET") {
            options = {
                method: method,
                headers: {
                    "Accept": "application/json"
                }
            }
        }
       
        const response = await fetch(url, options)
        const data = await response.json()
        return {ok: true,
            data}

    } catch (error) {
        console.log('FAILED while fetching', error)
        return {ok:false ,
            msg : "Lo sentimos no hay datos "}
    }

}

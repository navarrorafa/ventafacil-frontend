export const dataFetch = async (url, method, body = {}, file = false) => {

    let data;
    // console.log(url, method, body)
    let options = {};
    let newData = {}

    //if(file){

    //  newData = { ...body, file } //from body
    //} else {
    //    newData = {...body}
    // }
    newData = { ...body }

    try {
        if (method == "POST" || method == "PUT") {
         //   console.log("entra en post", newData)
            options = {
                method: method,
                body: JSON.stringify(newData),
                headers: {
                    "Content-type": "application/json",
                }
            }
        }
        // console.log(newData)
        if (method == "DELETE") {
            options = {
                method: method
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('FAILED while fetching', error)
        return error
    }

}
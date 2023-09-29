
export const dataFetch = async (url, method, body = {}, files= false) => {
    
    let data; 
    console.log(url, method,body)
    let options = {};
    let   newData = {}

    if(files){
        newData = { ...body, files } //from body
    } else {
        newData = {...body}
    }
    

    try {
        if ( method == "POST" || method == "PUT") {
        //   console.log("entra en post" , newData)
            options = {
                method: method,
                body: JSON.stringify(newData),
                headers: {
                    "Content-type": "application/json",
                }
            }
        }

        if(method == "DELETE" ) {
            options = {
                method: method
            }
        } 

      const response = await fetch(url,options)
      const data= await response.json()
    //   console.log(data)
    } catch (error) {
        console.log('FAILED while fetching', error)
        return error
    }
    return data
}

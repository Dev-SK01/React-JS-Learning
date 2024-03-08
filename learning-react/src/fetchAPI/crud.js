 export default async function apiRequest(API_URL, header = {} , errmsg = null ) {

    
    try {
        const response = await fetch(API_URL, header);
        if (!response.ok) throw Error('Reload The Page!');
        // console.log(response.json())
    } catch (err) {
    // console.log(err.Message); 
    errmsg = err.message;
    }
    finally{
        return errmsg;
    }
}

//(async()=>(await apiRequest()))();  calling the async function as async 
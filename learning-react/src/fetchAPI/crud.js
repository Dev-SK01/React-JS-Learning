async function apiRequest() {
    const API_URL = ' http://localhost:3500/UserData';

    const postData = {
        UserId: "hgjksdhg",
        password: "admin@123",
        id:4
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(postData)
    }
    try {
        const response = await fetch(API_URL, postOptions);
        if (!response.ok) throw Error('Reload The Page!');
        console.log(response.json())
    } catch (err) {
    console.log(err.Message); 
    }
}

(async()=>( await apiRequest()))();
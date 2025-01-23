function data()
{
    return fetch('https://dummyjson.com/products')
    .then((response)=>{
        if(!response.ok)
        {
            throw new Error('network error')
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        return data;
    });
}

data().catch((error)=>console.log("error in fetching "+error));
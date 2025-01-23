function data(){
    const urls=['https://dummyjson.com/quotes','https://dummyjson.com/comments','https://dummyjson.com/todos'];

    return Promise.all(urls.map((url)=>
    fetch(url).then(response=>{
        if(!response.ok)
        {
            throw new Error('Network Error');
        }
        return response.json();
    })))
}

data().
then((result)=>console.log(result)).catch((error)=>console.log(error));
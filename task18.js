function Random()
{
    return new Promise((reslove,reject)=>{
        let a=Math.random();
        console.log(a);
        if(a>0.5)
            reslove("greater than 0.5");
        else
            reject("lesser than 0.5");
    });
}
 
Random().then((data)=>console.log(data)
).catch((error)=>console.log(error))
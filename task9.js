function merge(a,b)
{
    return {...a,...b};
}
let obj1={a:1,b:2};
let obj2={c:5,d:9};
console.log(merge(obj1,obj2));
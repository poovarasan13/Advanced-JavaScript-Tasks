function sum(arr)
{
    let sum=0;
    for(var a of arr)
    {
        sum+=a;
    }
    return sum;
}
var array=[11,22,33,44];
console.log(sum(array));
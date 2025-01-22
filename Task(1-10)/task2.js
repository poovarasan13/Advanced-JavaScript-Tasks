function fib(a)
{
    if(a===0 || a===1) return a;
    return fib(a-1)+fib(a-2);
}
console.log(fib(3));
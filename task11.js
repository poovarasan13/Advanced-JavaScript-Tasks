function outer()
{
    function inner(){
        let a=10;
        return a;
    }
    return inner();
}
console.log(outer())
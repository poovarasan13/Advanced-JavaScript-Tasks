
function counter()
{
    let step=0;
    return{
        increment(){
            step++;
        },
        display(){
            return step;
        }
    }
}
let count=counter();
count.increment();
count.increment();
console.log(count.display());
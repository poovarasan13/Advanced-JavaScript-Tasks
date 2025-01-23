
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
let count1=counter();
let count2=counter();
count1.increment();
count2.increment();
count2.increment();
count1.increment();

count2.increment();
console.log(count1.display());
console.log(count2.display());

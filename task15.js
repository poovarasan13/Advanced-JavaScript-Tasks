function op(oper)
{
    return function(a,b){
         switch(oper){
            case 'add':
                return a+b;
            case 'mul':
                return a*b;
         }
    }
}
const a=op('add');
const m=op('mul');

console.log(a(2,3));
console.log(m(5,6));
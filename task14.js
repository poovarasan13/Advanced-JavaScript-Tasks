function clss(){
         let a=4;
    return{
      increment(){
        return a;
    }
    };
}
let fun=clss();
console.log(fun.increment())
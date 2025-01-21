let obj={
    name:"John Wick",
    age:19,
    college:"karpagam"
}

let obj1=JSON.stringify(obj);
let clone=JSON.parse(obj1);

clone.age=20;
console.log("original "+ obj.name+ " "+ obj.age);
console.log("cloned "+clone.name+" "+ clone.age);
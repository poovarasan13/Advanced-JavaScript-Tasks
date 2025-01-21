let car={
    name:"bmw",
    model:2018,
    color:"red"
}

let modcar=JSON.stringify(car);
console.log(modcar);

let modifiy=JSON.parse(modcar);
console.log(modifiy.name+" "+ modifiy.model);
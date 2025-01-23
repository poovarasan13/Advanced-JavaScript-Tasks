const resolveValue=(value,delay)=>{
    return new Promise(r=>{
        setTimeout(()=>r(value),delay);
    });
};

resolveValue("Hello World",10000).then(greeting=>{
    console.log(greeting);
})
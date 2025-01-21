function tOH(n,s,m,d)
{
    if(n===0) return;
    tOH(n-1,s,d,m);
    console.log(n+" disk "+s+" move to "+m +" disk");
    tOH(n-1,d,m,s);
}
tOH(3,'A','C','B');
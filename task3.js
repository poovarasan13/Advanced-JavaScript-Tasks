function climb(n)
{
   if(n==0 || n==1 || n==2) return n;
   if(n==3) return 4;
   return climb(n-1)+climb(n-2)+climb(n-3);
}
console.log(climb(3));
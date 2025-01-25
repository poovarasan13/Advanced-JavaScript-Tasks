
import { add, multiply } from './module.js';

console.log(add(2, 3));        
console.log(multiply(2, 3));  

import { add as addition, multiply as times } from './module.js';

console.log(addition(2, 3));   
console.log(times(2, 3));      

import { add, subtract } from './standard_export/mathUtils';
import PI from './default_export/constants';
import { PI as PiValue, add as addition, subtract as subtraction } from './re_export/index';

console.log("Addition:", add(5, 3)); // Using imported functions from mathUtils
console.log("Subtraction:", subtract(5, 3)); // Using imported functions from mathUtils
console.log("PI:", PI); // Using default export from constants

console.log("Re-exported PI:", PiValue); // Using re-exported default export from index
console.log("Re-exported Addition:", addition(10, 5)); // Using re-exported function from index
console.log("Re-exported Subtraction:", subtraction(10, 5)); // Using re-exported function from index

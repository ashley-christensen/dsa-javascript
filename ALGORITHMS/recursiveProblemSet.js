//Write a function called "power", which accepts a base and an exponent. the function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
//inputs are base case and exponent
//outputs are one value that is hte base multiplied exp times to itself
//we can derive output
//base exp, return value that comes

//(2, 3) 2*2*2 = 8
//(1, 4) 1*1*1*1 = 4

//exp can be like count. so when exp is 1, return? 
//exp--
///base never changes but exp goes down
//call base * power()


function power(base, exp) {
 // base =2
 // exp=0
 if (exp <= 0) {
  return 1;
 } else {
  exp--;
  return base * power(base, exp);
 }
}

// console.log(power(2, 3));

function productOfArray(arr) {
 let product = 1;

 function helper(helperInput) {
  if (helperInput.length === 0) return;
  product *= helperInput[0];
  helper(helperInput.slice(1));
 }

 helper(arr);
 return product;
}

// console.log("result:", productOfArray([1, 2, 3]));

function recursiveRange(num) {
 if (num === 1) return 1;

 console.log(num);
 return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(4));
//4 + 3 + 2 + 1

function fib(num) {
 if (num < 2) return num;
 console.log("number is:", num);
 return fib(num - 1) + fib(num - 2);
}

// console.log('solution', fib(7));


function reverse(str) {
 if (str.length <= 1) return str;
 return (reverse(str.slice(1))) + str[0];//stack returns these backwards
}
//reverse('appy') + h; yppa + h = yppah
//reverse('ppy') + a;ypp + a = yppa
//reverse('py') + p; yp + p = ypp
//reverse('y') + p; y + p = yp
//reverse('') + y; '' + y = y
//reverse('') this call to reverseStr and its input HITS our base case, move back up returns full return

console.log((reverseStr('hello')));

function isPalindrome(str) {
 if (str.length === 1) return true;
 if (str.length === 2) return str[0] === str[1];
 if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
 return false;
}

// console.log(isPalindrome('ashley'));
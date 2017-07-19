//FIZZ BUZZ
// for(i = 1; i <= 100; i++) {
// 	if(i % 3 == 0 && i % 5 == 0) {
// 		console.log("FizzBuzz")
// 	} else if(i % 3 == 0) {
// 		console.log("Fizz")
// 	} else if(i % 5 == 0) {
// 		console.log("Buzz")
// 	} else {
// 		console.log(i)
// 	}
// }



















//LARGEST NUMBER
var arr = [5, 26, 78, 99, 55],
biggest = 0;

for(i = 0; i < arr.length; i++) {
	if(arr[i] > biggest) {
		biggest = arr[i];
	}
}
console.log(biggest)

// var array = [52, 73, 108, 4, 91]
// var arrayLargest = array.sort(function(a,b) {return a-b;}).reverse()[0];

// console.log(arrayLargest);


//FIBONACCI'S SEQUENCE
// var first = 0,
// second = 1,
// third = 0;

// while(third <= 377) {
// 	console.log(third)
// 	third = first + second;
// 	first = second;
// 	second = third;
// }

// var arr = [0,1];
// for(i=0; arr.includes(987) == false; i++)
// {
//     arr[i+2] = arr[i] + arr[i+1];
//     console.log(arr[i]);
// }

// var a = 0, 
// b = 1, 
// f = 1;
// for(var i = 2; i <= 14; i++) {
//     f = a + b;
//     a = b;
//     b = f;
//     console.log(f);
// }

// WITH A FUNCTION
// var looping = function(n) {
//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//         console.log(f);
//     }
// };
// looping(14);






// MULTIPLICATION TABLE
// for(i = 1; i <= 12; i++) {
// 	for(j = 1; j <= 12; j++) {
// 		console.log(i * j)
// 	}
// }












// Test if a string is a palindrome
var str = "join"
var joinArray = str.split("").reverse().join("");

if(str === joinArray) {
	console.log(str + " is a palindrome")
} else {
	console.log(str + " is not a palindrome")
}























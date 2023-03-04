// QUESTION ONE(1)

Mutating array methods modify the original array,
while
Non-mutating array methods do not modify the original array and return a new array. Here are five examples of each category:

Mutating array methods are:
1.	push() - adds one or more elements to the end of an array
2.	pop() - removes the last element from an array
3.	shift() - removes the first element from an array
4.	unshift() - adds one or more elements to the beginning of an array
5.	splice() - adds or removes elements from an array

Non-mutating array methods are:
1.	concat() - combines two or more arrays and returns a new array
2.	slice() - returns a portion of an array as a new array
3.	join() - joins all elements of an array into a string
4.	filter() - creates a new array with all elements that pass a test
5.	map() - creates a new array with the results of calling a function for each array element






// QUESTION TWO (2)

// The array of languages
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// 1. Adding 'Kotlin' to the end of the array
languages.push("Kotlin");

// 2. Adding 'Java' after 'Ruby'
languages.splice(3, 0, "Java");

// 3. Remove the first item in the array
languages.shift();

// 4. Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift("Scala", "Swift");

// 5. Replace 'PHP' with 'Go' and 'Rust'
const phpIndex = languages.indexOf("PHP");
languages.splice(phpIndex, 1, "Go", "Rust");

console.log(languages);

//Output: ["Scala", "Swift", "C#", "JavaScript", "Ruby", "Java", "Go", "Rust", "Python","Kotlin"];





//QUESTION THREE (3)

let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
const fruits = changeFruit(fruit)
console.log(fruit); //Output:  ['apple', 'mango', 'orange']

// The value of fruit after calling the changeFruit function would be ['apple', 'mango', 'orange'].






// QUESTION FOUR (4)

function maxVal(numbers) {
	let max = numbers[0]; 	
	for (let i = 1; i < numbers.length; i++) {
	  if (numbers[i] > max) {
		max = numbers[i]; 
	  }
	}
	
	return max;
  }
  const numbers = [5, 7, 10, 2, 8, 4];
const max = maxVal(numbers);
console.log("Maximum value is " + max);  //Output: Maximum value is 10






// QUESTION FIVE (5)

function valTimesIndex(arr) {
	return arr.map((val, index) => val * index);
  }
const numbers = [2, 4, 6, 8];
const result = valTimesIgndex(numbers);
console.log(result); //Output:  [0, 4, 12, 24]


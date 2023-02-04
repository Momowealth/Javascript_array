// javascript_array
// Question1
var arr = [[1,2,3],[4,5,6],7,8,9,[[10,11,12,[13,4,112]],136,14],];
console.log(arr[3]);
console.log(arr[5][0][0]);
console.log(arr[5][0][3][0]);
console.log(arr[5][1]);
console.log(arr[1][0]);

// Question2
var sentence = ["javascript","web","CapacityBay"];
console.log("I am a", sentence[1], "developer at", sentence[2], "and I love", sentence[0])

// question3
var str = "generalization";
var fourthToLast = str[10]
console.log(fourthToLast);

// question4
var fruit = ["orange","apple","guava","lemon"];
fruit.unshift("pea","banana");
console.log(fruit);
var fruits = ["orange","apple","guava","lemon"]
fruits.push("Avocado","mango");
console.log(fruits);
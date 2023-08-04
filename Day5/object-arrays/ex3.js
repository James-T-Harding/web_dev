myArray = ["hello", "everyone"]
console.log("Array length is:", myArray.length);
myArray.push("how")
myArray.push("are")
myArray.push("you")
myArray.push("doing")

console.log(myArray);
myArray.shift()

for (let value of myArray){
    console.log(value);
}
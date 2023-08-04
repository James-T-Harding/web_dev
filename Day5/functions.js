function ex1(num1, num2) {
    return num1 - num2
}

let welcome = function(name, age, gender){
    console.log(
        `My name is ${name}, I am ${age} years old and of gender ${gender}`
    )
}


let powerUp = (n1, n2) => Math.pow(n1, n2)


console.log(ex1(10, 1000))
welcome("Felix Citied", 20, "Male")
console.log(powerUp(3, 3))
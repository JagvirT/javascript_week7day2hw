//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const get_favorites = (person3) =>{
    console.log('pizza', person3['pizza'])
    console.log('tacos', person3['tacos'])
    console.log('burgers', person3['burgers'])
    console.log('ice cream', person3['ice_cream'])
    console.log('shakes', person3['shakes'])
}

get_favorites(person3)

/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age, increment){
        this.name = name
        this.age = age
        this.increment = increment
    }

    printInfo = () => {
        return (`${this.name} is ${this.age} years old`)
    }

    increment_age = () => {
        return (`${this.name}'s age is incremented by 3 to ${this.age + this.increment}`)
    }
}

let joe = new Person('Joe', 30, 0)
console.log(joe.printInfo())

let bob = new Person('Bob', 7, 3)
console.log(bob.printInfo())
console.log(bob.increment_age())


/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const count_strng = (length_of_strng) => {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            if (length_of_strng.length < 10){
                console.log('Small Number')
            } else {
                console.log('Big word')
            }
        }, 500)
    })
}

const strng_checker = async (strng) => {
    const response = await count_strng(strng)
    console.log(response)
}

strng_checker("ndwijwefiljwfe")





// Codewars Problems
// problem 1: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// link : https://www.codewars.com/kata/55685cd7ad70877c23000102

const make_negative = (number) =>{
    if (number < 0){
        return number
    } else if (number > 0){
        return number * -1
    }else{
        return 0
    }
}

console.log(make_negative(-8))


// problem 2: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101
// up to and including the year 200, etc. Given a year, return the century it is in.
//LINK: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/python

const get_century = (year) =>{
    return Math.floor((year + 99)/100)
}

console.log(get_century(1992))

















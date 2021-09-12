//  //Other string methods
// const firstName = 'Alan'
// const lastName = 'Smith'

// let val;

// //concatenate
// val = firstName + lastName
// val = firstName + ' ' + lastName

// // append
// val = 'Alan'
// val += 'Smith'

// // escaping
// val = "That's great that you've found a job"
// val = 'That\'s great that you\'ve found a job'

// // length
// val =  firstName.length

// // concat
// val = firstName.concat(' ',lastName)

// // change case 
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()



// console.log(val)


// //Template literal
// let name = 'Alan'
// let age = 5
// let drinking = 'beer'
// let message;

// function drink() {
//     if (age > 18) {
//         return 'beer'
//     }else {
//         return 'coke'
//     }
// }


// message = 'Hello, my name is ' + name +'. I love drinking ' 
// + (age> 18 ? 'beer' : 'coke')
// message = `Hello my name is ${name}. I love drinking ${age> 18 ? 'beer' : 'coke'}`

// console.log(message)


// //ARRAYS

// const arr1 = [30, 50, 40]
// const arr2 = new Array(80, 20)
// const users = ['Alan','Peter','Ben','John']
// const anything = ['Alan',3, null, undefined, false, {name: 'Alan', age: 30 }, new Date()]
// console.log(anything)

// let val
// val = arr1.length
// // check whether is array
// val = Array.isArray(arr1)

// val = arr1[1]

// arr1[2] = 'last item'
// console.log(arr1)

//ARRAY METHODS

// const arr1 = [30, 50, 6, 40]
// const arr2 = new Array(80, 20)
// const users = ['Alan','Peter','Ben','John']
// const anything = ['Alan',3, null, undefined, false, {name: 'Alan', age: 30 }, new Date()]
// console.log(anything)

// let val;
// manipulating the array 
// Add to the end
// arr1.push(200)

// add to the front
// arr1.unshift(300)

// remove the end
// arr1.pop()

// remove the front
// arr1.shift()

// at position 1 , remove one item and insert "one" "two"
// arr1.splice(1,1,"one","two")
// arr1.splice(1,2,"one","two")
// arr1.splice(1,2)

// reverse
// arr1.reverse()
// concat array
// val = arr1.concat(arr2)
// sort
// val = users.sort().reverse()
// val = arr1.sort()
// sort with compare function
// val = arr1.sort(function(a,b){
    // return a-b
// })
// reverse sort with compare function
// val = arr1.sort(function(a,b){
    // return b-a
// })
// find
// function gt10(num){
    // return num>10
// }
// val = arr1.find(gt10)
// find and filter
// val = arr1.filter(gt10)

// console.log(val)

// DATE OBJECTS

// let val
// let d = new Date('12-25-2020 11:30:00')
// d = new Date('12/25/2022')
// d = new Date('December 25 2021')
// const d = new Date()
// val = d

// val = d.getMonth()
// val = d.getDate()
// val = d.getDay()
// val = d.getFullYear()
// val = d.getHours()
// val = d.getMinutes()
// val = d.getMilliseconds()
// val = d.getTime()

// d.setMonth(8)
// d.setDate(25)
// d.setFullYear(2000)
// d.setHours(3)
// d.setMinutes(15)
// d.setSeconds(30)
// console.log(d)
// console.log(val)

// IF STATEMENT

// let mark 
// let mark = 46
// abstract equality person
// if (mark == 50) {
//     console.log('The mark is 50')
// }else{
//     console.log('The mark is NOT 50')
// }
// if (mark != 40) {
//     console.log('The mark is NOT 40')
// }else{
//     console.log('The mark is 40')
// }

// Strictly equality person
// if (mark !== 50) {
//     console.log('The mark is NOT 50')
// }else{
//     console.log('The mark is 50')
// }

// check unefined
// if (typeof mark !== 'undefined') {
//     console.log(`The mark is ${mark}`)
// }else{
//     console.log('The mark is undefined')
// }

// greater than or equal 
// if (mark>=50) {
//     console.log('You pass the test')
// }else{
//     console.log('You fail the test')
// }
// less than or equal
// if (mark < 50) {
//     console.log('You fail the test')
// }else{
//     console.log('You pass the test')
// }

// LOGICAL OPERATOR
// else if 
// let hour = 21
// if (hour<12){
//     console.log('Good Morning')
// }else if(hour<20) {
//     console.log('How do yu do')
// }else{
//     console.log('Good Evening')
// }

// logical operator
// let mark = 23

// AND operator
// if (mark > 50 && mark <= 80) {
//     console.log('Good')
// } else if (mark > 80) {
//     console.log('Excellent !!')
// } else {
//     console.log('Keep it up')
// }

// OR operator
// let hour = 12;
// let isWeekend = true

// if (hour<10 || hour>17 || isWeekend){
//     console.log('The office is now closed')
// }else {
//     console.log('The ffice is now open')
// }

// ternary operator
// let age = 16
// if(age<18){
//     console.log('You CANNOT drink beer')
// }else{
//     console.log('You can drink beer')
// }

// const drink  = age<18? 'You CANNOT drink beer': 'You can drink beer'
// console.log(drink)

// one line
// if (age<18) console.log('You CANNOT dronk beer'); else console.log('You can drink beer')

// SWITCH CASE

// const fruit = "banana"
// switch (fruit) {
//     case "apple":
//         console.log('red')
//         break;
//     case "orange":
//         console.log('orange')
//         break;
//     case "banana":
//         console.log('yellow')
//         break;

//     default:
//         console.log('I don\'t know')
//         break;
// }

// let today = new Date().getDay()
// switch(today) {
//     case 0:
//         console.log('Sunday')
//         break;
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
// }

// const x = 8
// switch (true) {
//     case (x<5):
//         console.log('less than 5')
//         break;
//     case (x<10):
//         console.log('between 5 and 10')
//         break;
        
//     default:
//         console.log('grater than 10')
//         break;
// }

// FUNCTION DECLARATION

// function user(name,age) {
//     if (typeof name == 'undefined') {
//         name = 'John'
//     }
//     if (typeof age == 'undefined') {
//         age = 20
//     }
//     return `Hello, my name is ${name}. I am ${age} years old`
// }
// console.log(user())
// console.log(user('Alan', 18))

// function user(name = 'Mary',age = 80) {
//     return `Hello, my name is ${name}. I am ${age} years old`
// }
// console.log(user())
// console.log(user('Alan',18))

// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

// const sum = function (x = 1,y = 2) {
//     return x + y;
// }
// console.log(sum())

// IIFE
// var num = 90;
// (function(){
//     var num = 3;
//     console.log(num)
// })()

// console.log('outside IIFE',num)
// const person = {
//     hello:function(){
//         console.log('Hello')
//     },
//     age:function(age){
//         console.log(`I am ${age} years old`)
//     }
// }
// person.laugh = function(){
//     console.log('Ha ha')
// }
// person.hello()
// person.age(18)
// person.laugh()

// GENERAL LOOP

// FOR LOOP
// for (let i=0; i<10; i++){
//     if (i === 3){
//         console.log('Three')
//         continue;
//     }
//     if (i === 6){
//         console.log(i);
//         break;
//     }
//     console.log(i)

// }
// WHILE LOOP
// let i = 0
// while (i<10){
//     console.log(i)
//     i++;
// }
// DO WHILE
// let i = 1000
// do{
//     console.log(i)
//     i++;
// }while (i < 10);

// LOOP THROUGH ARRAY

const users = ['Alan', 'Peter', 'John']

// for loop
// for (let i = 0; i<users.length; i++){
//     console.log(users[i]);
// }
// for of
// for (const user of users) {
//     console.log(user)
// }
// for each
// users.forEach(user => {
//     console.log(user)
// });
// users.forEach(function (user) {
//     console.log(user)
// });
// users.forEach(function (user, index) {
//     console.log(index, user)
// });
// users.forEach(function (user, index, arr) {
//     console.log(index, user, arr)
// });
// map
// const hiUsers = users.map(function (user){
//     return `Hi, ${user}`
// });
// console.log(hiUsers)
// for in
// const user = {
//     name: 'Alan',
//     age: 18,
//     title: 'Programmer'
// }
// for (const key in user) {
//     console.log(`${key}: ${user[key]}`)
// }

// WINDOW OBJECT METHODS

// alert
// alert('Hello)
// prompt
// const name = prompt('What is your name?')
// alert(`Hello, ${name}`)

// confirm
// if(confirm('Are you sure to delete')){
//     alert('The file is deleted')
// }else{
//     alert('Nothing is deleted')
// }

// WINDOW OBJECT PROPERTIES

// outer width and height
// let oh = window.outerHeight;
// let ow = window.outerWidth;
// console.log(oh, ow)

// inner width and height
// let ih = window.innerHeight;
// let iw = window.innerWidth;
// console.log(ih, iw)
// scroll points 
// let sy = window.scrollY;
// let sx = window.scrollX;
// console.log(sx, sy)
// location objects 
// let val;
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;
// console.log(val)
// redirect
// window.location.href = "http://www.google.com"
// reload
// window.location.reload()
// history
// window.history.go(-2)
// navigator object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val)

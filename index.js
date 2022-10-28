// let obj = {
//     name: "Tolibbek",
//     greet: function (a, b) {
//         console.log(a + " " + b)
//     }
// }

// let a = prompt("Mening ismim", "Mening ismim")
// let b = prompt("Tolibbek", "Tolibbek")
// obj.greet(a,b)


// console.log("Mening ismim " , obj.name);
// console.log(obj.name)

/*
let person = {
    name: "Tolibbek",
    age: 14 ,
    gender: "kotta bola"
}
console.log("mening ismim " , person.name , "Men " , person.name , person.gender , "man");
*/


// let javascript_tests = 1000
// try{
//     javascript_tests = 550
// } finally {
//     javascript_tests = 54
// }
// console.log(javascript_tests);
//  let x = "shirin"
// x= 'foydali'
// print("olma" + x);
// var x = "shirin"
//  function( ) :
//  global x
//  x = 'foydali'
//  print("olma" + x)
//  function()
//  print("olma" + x);
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };


// console.log(person.name); 

// // accessing method
// person.greet(); // hello

// let number = '23.';
// let result = parseInt(number);

// console.log(result); // 2



// let student = { };


// student.name = 'John';


// student.greet = function() {
//     console.log('hello');
// }

// student.greet(); 

// const person = {
//     name: 'John',
//     age: 30,

//     greet: function() { console.log('The name is' + ' hp ' + this.name ,"uning yoshi " +
//     this.age) ; }
// };

// person.greet();

// const person =  {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         let surname = 'Doe';
//         console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };

// person.greet();
// constructor function



// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person = new Person();
// console.log( Person.this.age);



// const person = {
//     name: 'Tolibbek.',
//     age: 30,
//     KIM:"Talaba",
//     count:2 ,
//     k:"Meni",
//     a:"man",
//     // using function as a value
//     greet: function() { 
//         console.log('hello') 
//     } ,
//     printName: function() {
//         return "Assalamu aleykum " + this.name
//     },
//     malumot: function() {
//         return this.printName() +this.k+ " yoshim " + this.age + "da."
//     },
//     new: function(){
//       return this.malumot() +" men " + this.KIM +"man."
//     },
//     jem: function(){
//       return this.new() + " men " + " insitutda " + this.count+" kurs"+ this.a
//     }
  
    
//   };
//   console.log(person.greet())
//   console.log(person.printName())
//   console.log(person.malumot())
//   console.log(person.new())
//   console.log(person.jem())


// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// const person1 = new Person();
// const person2 = new Person();

// console.log(person1.age);  
// console.log(person2.name); 



// console.log(Tolibbek , 14);
 // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1.greet());  
// console.log(person2.age); 



/*
// constructor function
function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name );
     }
 }
 
 
 // creating objects
 const person1 = new Person('John', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 
//  // accessing properties
 console.log(person1.gender); // "John"
 console.log(person2.greet()); // "Sam"
 */


//  function Person(name , age , gender){
//     this.name = name,
//     this.age = age,
//     this.gender = gender
//  }
//  const person1 = new Person('Tolibbek' , 14 , 'male');

//  console.log("Hi my name is " + person1.name + " yoshim "  +person1.age+ "da");



// function Person(name ,age ,gender){
//     this.name =name,
//     this.age = age,
//     this.gender =gender,
//     greet=function(){
//         return("Mening ismim " + person1.name + "." + "Yoshim " + person1.age +"da" +"."  + "Gender " +person1.gender +".");
//     }
//     greet1=function(){
//         return("Uning ismi " + person2.name + "." + "Yoshi " + person2.age +"da" +"."  + "Gender " +person2.gender +".");
//     }
//     greet2=function(){
//         return("Uning ismi " + person3.name + "." + "Yoshi " + person3.age +"da" +"."  + "Gender " +person3.gender +".");
//     }
//     greet3=function(){
//         return("Uning ismim " + person4.name + ". Yoshi " + person4.age +"da" +"."  + "Gender " +person4.gender +".");
//     }
// }

// const person1 = new Person('Tolibbek',14,'male')

// const person2 = new Person('DOSTON',23,'male')

// const person3 = new Person('Abdulloh',32,'male')

// const person4 = new Person('Behruz',14,'male')
// console.log(greet());
// console.log(greet1());
// console.log(greet2());
// console.log(greet3()); 





// function Cars(brend,yil,davlat){
//     this.name = brend,
//     this.year = yil,
//     this.age = davlat,
//     BMW=function(){
//         return("Bu mashina " + car1.name + "." + "Bu " + car1.year + "- yil " + car1.age +" ishlab chiqarilgan.")
//     }
//     Mercedes=function(){
//         return("Bu mashina " + car2.name + "." + "Bu " + car1.year + "- yil " + car2.age +" ishlab chiqarilgan.")
//     }
//     Maibu=function(){
//         return("Bu mashina " + car3.name + "." + "Bu " + car1.year + "- yil " + car3.age +" ishlab chiqarilgan.")
//     }
//     Hyundai=function(){
//         return("Bu mashina " + car4.name + "." + "Bu " + car1.year + "- yil " + car4.age +" ishlab chiqarilgan.")
//     }
// }

// let car1 = new Cars("BMW XM6",2020,"Germaniyada")
// let car2 = new Cars("Mercedes-Benz GLS 600",2020,"Germaniyada")
// let car3 = new Cars("Malibu 2",2020,"O'zbekiston")
// let car4 = new Cars("Hyundai sonata",2020,"Amerika")

// console.log(BMW());
// console.log(Mercedes());
// console.log(Maibu());
// console.log(Hyundai());

const student = {

    firstName: 'Monica',
    lastname:'Jobs',
    // get getName() {
    //     return this.firstName;
    // },
    set changeName (newName) {
         this.lastname = newName;
    }
};

// console.log(student.firstName); 

// console.log(student.getName); 

// console.log(student.getName()); 

console.log(student.lastname); 
student.changeName = 'Sarah';
console.log(student.lastname ); 

// console.log(student.lastname()); 
const person ={
    name:"Mohd Kabir",
    age:20,
    city:"Hyderabad"
};

for (let member in  person){
    // console.log(`${member}   :  ${person[member]}`);
}
// console.log("Hello World")

// LEARNING OBJECTS 

   //OBJECT LITERALS
   const mySym=Symbol("key1")
   const jsuser ={
    name:"Kabir",
    age:20,
    location:"Hyderbad",
    email:"mdkabi123@gmail.com",
    "full name":"mohd kabir",
    IsLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
   [mySym]:"key1",
   }
   
//    console.log(jsuser.email)
//    console.log(jsuser["full name"])
//    console.log(jsuser[mySym])
//    Object.freeze(jsuser) //it will freeze object and doesnt allow to change values

jsuser.greeting =function(){
    console.log(`Hello ${this["full name"]}`); 
}
// console.log(jsuser.greeting())


//OBJECT PART 2

//SINGELTON OR CONSTRUCTOR

// const tinderUser = new Object() //singelton example
const tinderUser = {}  // non singleton object


tinderUser.id="123abc"
tinderUser.name="kabir"

// console.log(tinderUser)

const regularUser={
    email:"somegmail.com",
    fullname:{
        userFullname:{
            firstanme:"mohd",
            lastname:"kabir"
        }
    }//nesting objects

}
// console.log(regularUser.fullname.userFullname.firstanme)



const obj1 ={1:"a",2:"b",}
const obj2 ={3:"a",4:"b",}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// syntax :- // const obj3 = Object.assign(target,source)


const obj3={...obj1, ...obj2} //spread operator
// console.log(obj3)

//fetching keys from database and combining them into an array

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))  Accessing keys of object and combining in to an array
// console.log(Object.values(tinderUser))  Accessing values of object and combining in to an array
// console.log(Object.entries(tinderUser)) divide every key value pair into an arrays
// console.log(tinderUser.hasOwnProperty('name')) check whether the properties are exist are not 



// video #3 - JSON AND DE-STRUCTURE 


const course ={
    coursename:"javascript in hindi",
    price:999,
    lecturer:"hitesh"
}

const  {lecturer:instructor} =course //destructuring
console.log(instructor);




//JSON

// {
//     "coursename":"javascript in hindi",
//     "price":999,
//     "lecturer":"hitesh"
// }


    console.log(`${member}   :  ${person[member]}`);

// console.log("Hello World")






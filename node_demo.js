/*jshint esversion: 6 */

// const a= class{
//    constructor(key, value){
//        this.key=key;
//        this.value=value;

//    };

//    add=(key, value, ar)=>{

//     const a1= new a(key,value);
//     ar.push(a1);
//     ar.forEach((elements)=>{
//       console.log(elements);
//       return ar;
//     })
// let elemnt=JSON.stringify(ar);

//  console.log(`key: ${ar.key} Value: ${ar.key}`);

//     };

//    }
// const a2= new a();

// let ar=[];
// a2.add(62,'asnjl', ar);

//const { get } = require("express/lib/response");

// const { resolve } = require("path/posix");
// const { message } = require("statuses");
// const { promisify } = require("util");

// }
// let ar=[];
// let myObject={};
// myObject=a;
// myObject.key=2;

// console.log(myObject.key)
//let square = (a, err) => a*a
//{
// if(err) throw err,
//console.log(a*a);
//  'hello';
//}

//console.log( square(8));
//alert(square(8))

//let a1=[];
//a1=[new a(7,'Ashish'),new a(8,'sharma')];
//a2=new a(8,'Sharma');
//b=b[a1,a2];
//for(i=0;i<2; i++)
//console.log(a1[1].key);
// const a={}
// a.name='Ashish'
// const b=a;
// b.name='Sourabh'
// console.log(a.name)

// const os= require('os');
// console.log(os.cpus());

// const numbers= [1,2,3,4,5,6,7,8,9];
// const findIt= 18;
// let num;
// let flag =0;

// numbers.forEach(num =>{
//     if(num===findIt)
//    flag=1;

// })
// if(flag==1)console.log('Number is present');
// else console.log('Number not present');

// const outer = {
// let an =1;
//  let inner={
//       console.log(an+1);
//  }
// return inner;

// }

// inner n;

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // o/p 3, 3, 3

//   }, 1000 + i);
// }
// const counter =(res)=> {
// return res;
// console.log(res);
// }
// counter(2);

// var a=2;
// var b;
// console.log(a);      //2
// console.log(b);    //Undefined
// console.log(a+b); //NaN
// console.log(ab); //error: ab not defined

// const express= require('express');
// const app= express();
// //const mysql= require('mysql');
// // const con=mysql.createConnection({
// //   host:'',
// //   username:'',
// //   password:''
// // });

// // con.connect(err=>{
// //   if(err) throw err
// //   console.log('connection succesfull');
// // })

// app.get('/:id/:name', (req,res)=>{
//   const id=req.params.id;
//   const name= req.params.name;
//   // const query = `INSERT (id, name) INTO table a VALUES (${id}, ${name})`;
//   // con.createQuery(query, (errr)=>{
//   //   if (err) throw err
//   //   console.log('entry inserted succesfully');
//   // })
//   res.send('Id and Name recieved');
// })

// app.listen(5000);

// const mypromise = new Promise((resolve, reject)=>{
//   let connection= '';
//   if(connection){
//     resolve('Resloved')
//   }  else {
//     reject('rejected')
//   }
// }).then((message)=>{
//   console.log(message);
// }).catch((message)=>{
//   console.log(message);
// });

// // Promise Proper Code
// const a=1;
// const myPromise= new Promise((resolve,reject)=>{

//   if(a===1)
// resolve();
// //   console.log(`value is same as ${a}`);
//   else
// reject();

// }).then(()=>{
//   console.log('Resolved Successfully')
// })
// .catch(()=>{
//   console.log('Rejected')
// });

// //Async and Await with promise- Actual understanding
// const helperPromise =  () => {
//   const promise = new Promise((resolve, reject) =>{
//     const x = "Ashish";
//     const y = "Sharma";
//     if (x === y) {
//       resolve("Strings are same");
//     } else {
//       reject("Strings are not same");
//     }
//   });

//   return promise;
// };

//  const demoPromise= async ()=> {
//   try {
//     let message = await helperPromise();
//     console.log(message);
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// }

// demoPromise();

//unit test Cases
// const assert= require('assert');
// describe('Checking the phone no. is of 10 digits', ()=>{
//   it('check equality', ()=>{
//   assert.equal(actual, expected);
// })
// })

// a=10;
// console.log(a);
// var a;

/* Array to Object*/

// let arr = [
//     ["name", "age"],
//     ["Jessy", 23],
//     ["Rosy", 32],
//   ];

//   let obj = {};
//   let obj1 = {};
//   const arr1 = [];
//   const [header, ...data] = arr;
//   const k1 = header[0];
//   const k2 = header[1];
// for (let i = 0; i < data.length; i++) {

//   let objet={};
//   objet[k1] = data[i][0];
//   objet[k2] = data[i][1];
//   arr1.push(objet);

// }
//  console.log(arr1);

/*function sequence*/
// const add=(a)=>{
// return (b)=>{
//   return a+b;
// }
// }

// console.log(add(3)(2));

// /*Remove dublicate values from array !!Not Working*/
// var removeDuplicates = function(nums) {

//   for(let i=0; i<nums.length;i++){
//   for(let j=i+1; j<nums.length; j++){
//     //const val= nums[i];
// //console.log('in');
// if(nums[i]==nums[j]){
// nums.splice(j,1);
// console.log(`matched : ${nums[j]}`);
// }

//   }}
//   return nums;
// };
// const nums=[0,0,1,1,1,2,2,3,3,4];
// const newNums=removeDuplicates(nums);
// console.log(newNums);

// const a=5;
// let b=10;
// console.log(b);
// console.log(a);
// // console.log(windows.b);
// // console.log(windows.a);

// let x= {}, y = {name:"Ronny"},z = {name:"John"};

// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};

// console.log(x[y]);

// const express= require('express');
// const app= express();

// app.get('/', (req, res)=>{
//   res.send('Hello World');
// })

// app.listen(5000);

//

/**defining custom array function  */
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const array1=[];
// Array.prototype.myFilter= function(){
//   for (let i = 0; i < this.length; i++) {
//   //  if(this[i]%3==0)
//     array1.push(this[i]);

//   }
//   return array1;
// }

//   const newArr=arr.myFilter((element)=>{
//     console.log('Hi'+element);
//     return (element%3==0)

//   })
//   console.log(newArr);

//console.log();
// console.log(arr.myFilter((element)=>{
//   return (element%2==0)
// }));

// /* call, apply and bind method in JavaScript*/

// let printFullName = function (hometown, state) {
//   console.log(this.firstName + " " + this.lastName + " from " +
//    hometown+', ' +state);
// };

// let name = {
//   firstName: "Ashish",
//   lastName: "Sharma",
// };

// let name2 = {
//   firstName: "Gauri Shankar",
//   lastName: "Sharma",
// };
// // borrow function using call, passing object as first argument.
// printFullName.call(name, "Jaipur", "Rajasthan");
// printFullName.call(name2, "Tehla","Rajasthan"); //in call agruments are sent by comma sepration
//  //apply method is same as call just the arguments other than object are sent in array form.
//  printFullName.apply(name2, ["India Gate","New Delhi"]);

// //Bind method binds the method with the object and returns new function
// let printMyName=printFullName.bind(name2, "Mumbai","Maharastra");
// printMyName();

// /* Prototypal Inheritance in JavaScript*/
// let arr=["Ashish","Aditya"];
// console.log(JSON.stringify(arr.__proto__));

// /**Polyfill- custom function creation */
// Function.prototype.myBind= function(...args){
//     let obj=this;
//     params=args.slice(1);
//     return function (...args2) {
//         obj.apply(args[0],[...params, ...args2]);
//     }
// }

// let printMyName2=printFullName.myBind(name2, "Mumbai");
// printMyName2("India");

/**code snippet */
// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 0);
// console.log("third");   //first
//third
//second

/** Closure in JavaScript */
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// const promise1= new Promise((resolve, reject)=>{
//     resolve(1);
// });
// const promise2= new Promise((resolve, reject)=>{
//     resolve(2);
// });
// const promise_all= (promise1,promise2)=>{
//     promise1.then((data)=>{
//         console.log('data: '+data);
//         if(data){
//             promise2.then((data2)=>{
//                 console.log('data2: '+data2);
//                 if(data2)
//                 return 'resolved';
//             else
//             return 'rejected';
//         })
//     }
//         else
//         return 'rejected';
//     })
// }

// console.log(promise_all(promise1,promise2));

// print();

// Select id, count from table i join table j on i.id=j.id where i.id=j.id;

// select id, count(id) from table group by id having count(id)>1;

//reverse string

//remove duplicate array elements

// let str='ashish';
// let rstr='';
// let arr=[];
// for(let i=0; i<str.length; i++){
//     arr.push(str[i]);
// }
// for(let i=0; i<str.length; i++){
//     rstr += arr.pop();
// }
// console.log(rstr);

/**remove repeated alphabets from array */
// const arr=['a','b','a','b','c','d'];
// const obj={};
// const arr2=[];
// const newArr=arr.filter((item, index)=>{

//     return arr.indexOf(item) == index;

// });
// console.log(newArr);

/**count appearance of repeated alphabets in array */
const arr = ["a", "b", "a", "b", "c", "d", "e"];
const counts = {};
arr.forEach(function (x) {
  // counts[x] = (counts[x] || 0) + 1;
  if (counts[x]) {
    ++counts[x];
  } else {
    counts[x] = 1;
  }
});
console.log(counts);

//Promise with call
// const arr=[1,2,2];

// const pr= new Promise((resolve, reject)=>{
//     if(arr.indexOf[1]==0){
//         resolve(1);
//     }
//     else{
//         reject(3);
//     }
//     next();
// }).then((data)=>{
//         console.log(data);

//     }).catch((data)=>{
//         console.log(data);

//     })

//  function async(await pr, function a(){
//   console.log("in a function");
// })();

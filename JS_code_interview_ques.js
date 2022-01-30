/**print 1, 2,3 with 1 sec delay */

//const print= ()=>{
//    for(let i=0; i<4; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },    i*1000)
// }
// }

/*Camel Case String */
// let a= 'are yOu goING to SChool';
// const arr= a.split(' ');
// let newString='';
// //console.log(arr);
// const arr1=[];
// arr.forEach((i)=>{
//   arr1.push((i.charAt(0)).toUpperCase().concat(i.substring(1).toLowerCase()));
// } );

//using for each loop
// arr1.forEach(element=>{
//   newString= newString+' '+element;
// //console.log(newString);
// })

//using for of loop
// for(let i of arr1) newString= newString+' '+i;
//console.log(newString);

/* Check repeating characters in a String and return the count*/
// const string='ashish';
// let count=[];
// let value=0;
// for(let i=0; i<string.length; i++){
//   for(let j=i+1; j<string.length; j++){

//   if (string.charAt[i]===string.charAt[j]){
//     console.log(string.charAt[j]);
//   value++;
//   }

//   }
//   count.push(value);
// }
// console.log(count);

//Map Iteration in Array
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var numbers_plus_one = numbers.map((item) => {
//     return item + 1;
// });
// console.log(numbers_plus_one);

/*left rotate array members */
// const arr=[2,3,4,5,7];
// const arr1=[];
// const rotate=(arr)=>{
//  // for(let i=0; i<arr.length; i++){
//    const i=arr.length-1;
//       let lastValue=arr[i];
//       arr.pop();
//       arr.unshift(lastValue);
//       return arr;
//  // }
// }
// let arr2=rotate(arr);
// let arr3= rotate(arr2);
// console.log(rotate(arr3));

/** Remove duplicate element from array */

//arr=[1,1,2,2,3,3,3,4,5,6,6,77];
////# first approach
//uniqueArray= [...new Set(arr)];
// console.log(uniqueArray);

////# second approach
// uniqueArray = arr.filter(function(item, index) {
//     return arr.indexOf(item) == index;
// });
//  console.log(uniqueArray);

/*checking two strings amagnate!! Not Working*/
// const express= require('express');
// const app= express();

// app.get('/:string1/:string2', (req,res)=>{
//   const firstString= req.params.string1;
//   const secondString= req.params.string2;

//   if(firstString===secondString)
//   {
//     console.log('they are not anagrams');
//   } else {
//     let a=[];
//     let flag=0;
//     for(let i=0; i<firstString.length;i++)
//     a.push(firstString.charAt(i));

//     a.forEach(element => {
//       if(secondString.search(element))
//       flag=1;
//       else
//       flag=2;
//     });
//     if(flag==1){
//       console.log('these strings are anagrams');
//       res.status(200).send('these strings are anagrams');
//     }
//     else console.log('They are not anagrams');
//     res.status(200).send('these strings not are anagrams');
//   }
// })

//app.listen(5000);

/**Return first letter of String on each call */

// let str;
// const tokeniser= (param)=>{
//     if(param!==undefined)
//     str = param;
//     let arr=str.split('');
//     firstChar=arr[0];
//     // console.log(firstChar);
//      str=str.substr(1);
//      return firstChar;
// }
//  let a=tokeniser('boomerang');
// // console.log(a);
// console.log(tokeniser());

/**reverse a string */

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

////#Another Approach
// const str='hello';
// let arr=[];
// arr=str.split('');
// let newStr='';
// newStr += arr.reverse();
// newStr.replace(',','');
// console.log(newStr);

////#another Approach
// const a='Ashish';
// let str='';
// const arr=[];
// for(let i=0; i<a.length; i++){
// arr.unshift(a.charAt(i))
// }
// arr.forEach(element => {
//   str +=element;
// });
// console.log(str);

/** Bubble Sorting an array */
// const a=[2,1,5,4,2,3, -5,0,-255]
// const sortIt=(a)=>{
//   //loop to access each array element
//  for(let i=0; i<a.length; i++){
//   // loop to compare array elements
//   for(let j=0; j<a.length-i; j++)
//   {
//     //compare 2 adjacent elements
//     if(a[j]>a[j+1])
//     {
//       // swap elements
//     let b= a[j]
//         a[j]=a[j+1]
//         a[j+1]=b;
//     }
//   }
//  }
//  return a;
//  }
// console.log(sortIt(a));


/**Quick Sort - aim is to select pivot and place where left elements are smaller and right are larger
 * pivot= last element 
 * i=-1 (index of smaller element)
 * loop j=0
 * 
*/
// const quickSort=(arr)=>{
//   let pivot= arr[arr.length-1];
//   let i=-1, j;
//   for(j=0; j<arr.length-1; j++){
//   if(arr[j]>pivot){
//     i++;
//     let temp=arr[i];
//     arr[i]= arr[j];
//     arr[j]=temp;
//   }
//   }
//   let temp2=pivot;
//   pivot= arr[i+1];
//   arr[i+1]=temp2;
//   return arr;
// }


//console.log(quickSort([10, 7, 8, 9, 1, 5]));


/**reverse array*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse().join(""));
// const [a] = arr;
// console.log(a);

/**Star Pattern printing
 * *
 * **
 * ***
 * ****
 */
// let star='';
// const printStar=(n)=>{
//   for(let i=1; i<=n;i++){
//     for(let j=1; j<=i; j++){
//     star += '*';
//   }
//     star += '\n';
//   }
//   console.log(star);
// }

// printStar(8);

/** compare 2 objects in JS and only return non repeated objects */
// const result1=[{
//     id: 111,
//     name: 'aaa'
// }, {
//     id: 222,
//     name: 'bbb'
// },
// {
//     id:444,
//     name: 'ddd'
// }];

// const result2=[{
//     id: 111,
//     name: 'aaa'
// }, {
//     id: 222,
//     name: 'bbb'
// },
// {
//     id: 333,
//     name: 'ccc'
// }]
// const result2=[1,2,3];
// const result1=[2,3,4];

// //Find values that are in result1 but not in result2
// var uniqueResultOne = result1.filter(function(obj) {
//     return !result2.some(function(obj2) {
//         return obj.value == obj2.value;
//     });
// });

// //Find values that are in result2 but not in result1
// var uniqueResultTwo = result2.filter(function(obj) {
//     return !result1.some(function(obj2) {
//         return obj.value == obj2.value;
//     });
// });

// //Combine the two arrays of unique entries
// var result = uniqueResultOne.concat(uniqueResultTwo);
// console.log(uniqueResultTwo);

// var removeDuplicates = function (nums) {
//    for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) 
//       nums.splice(j,1);
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) 
//       nums.splice(j,1);
//     }
//   }
//   return nums;
// };
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


/*check if obj is empty*/
// let obj={key: 5};
// const isEmpty=(obj)=>{
//   for(let key in obj)
//   {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(obj));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum=0;
// for(let sal in salaries){
//    sum +=salaries[sal];
// }
// salaries.sum=sum;
// console.log(salaries);


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// for(let sal in salaries){
//    salaries[sal]=salaries[sal]*2;
// }

// console.log(salaries);
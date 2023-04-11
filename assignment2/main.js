// // question-1
// function createAdder(numberToAdd) {
//     return function(number) {
//       return number + numberToAdd;
//     };
//   }
//   const addFive = createAdder(5);
//   console.log(addFive(10)); 
//   console.log(addFive(20)); 

 // question-2
//  function searchArray(array, value) {
//     if (array.length === 0) {
//       return false;
//     }
    
//     if (array[0] === value) {
//       return true;
//     }
    
//     return searchArray(array.slice(1), value);
//   }
//   const array = [1, 2, 3, 4, 5];
//   console.log(searchArray(array, 4)); 
//   console.log(searchArray(array, 8));

//question-3
// function addParagraph(text) {
//     const paragraph = document.createElement("p");
//     const content = document.createTextNode(text);
//     paragraph.appendChild(content);
//     document.body.appendChild(paragraph);
//   }
//   addParagraph("This is a new paragraph.");

// question-4
// let  listItems = prompt("Enter list item here");
// let list = document.getElementsByTagName("body")[0];
// console.log(list);
// let unorder = document.createElement("ul");
// list.appendChild(unorder);
// list.insertAdjacentElement("afterbegin", unorder);
// let addList = document.createElement("li");
// function addPara(paragraph){
//     unorder.innerHTML = paragraph;
//     unorder.appendChild(addList);
//     addList.innerHTML = paragraph;
// }
// console.log(addPara(listItems));
  

  //question-5
//   let heading_1 = document.querySelector("#heading1");
//   let heading_2 = document.querySelector("#heading2");
//   function changes(id ,color){
//   id.style.backgroundColor = color;
//   }
//   changes(heading_2,'green');  

// question-6

// localStorage.clear()
// let object = {
// name: "Mahnoor",
// age: 19,
// Fname: "Haider",
// cast: "Ali",
// rollNo: 2393
// }
// let object2 = {
// name: "Zeenat",
// age: 21,
// Fname: "Haider",
// cast: "Ali",
// rollNo: 0156
// }
// function SaveObject(key, val){
// let newObject = JSON.stringify(val);
// localStorage.setItem(key, newObject)
// }
// SaveObject("data of obj", object);
// SaveObject("data of obj2", object2)


// 
// // question-7
// localStorage.clear();  
// // clearing local storage 

// // creating object 1
// let object_1 = {
//     name:"Mahnoor",
//     age: 20,
//     phone_no:"0382380234",
//     height:"5'2",
//     cnic: "5467694920",
//     pst_marks:80,
//     coal_marks:65,
//     oop_marks:100
// }

// // // creating object 2
// let object_2 = {
//     name:"Minahil",
//     age: 20,
//     phone_no:"9760684",
//     height:"5.5",
//     cnic: "8058456-6",
//     statics_marks:90,
//     urdu_marks:70,
//     iict_marks:80
// }

// // // creating object 3
// let object_3 = {
//     name:"Ali",
//     age: 14,
//     phone_no:"94500684",
//     height:"3.7",
//     cnic: "8058543456-9",
//     eng_marks:50,
//     urdu_marks:80,
//     maths_marks:60
// }

// let i = 0;
// //= // saving the object
//  function saving_object(key , value){
//        i = i+ 1
//         let new_object = JSON.stringify(value);
//         localStorage.setItem(key,new_object);
//         console.log("CONVERTED OBJECT  ",i," INTO STRING FORM \n\n", new_object)
//     }

// let j =0;
// //= //retrieve(object_1)
// function retrieve(object_name){
//     j = j+1;
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("CONVERTED OBJECT  ",j," INTO OBJECT FORM FROM STRING FORM \n\n", retrieved_object)
// }

// //= // calling saving and retrieving function 3 times with different arguments 
// saving_object("data of Mahnoor",object_1);
// retrieve('data of Mahnoor')
// saving_object("data of Minahil",object_2);
// retrieve('data of Minahil')
// saving_object("data of Ali",object_3);
// retrieve('data of Ali')

// //question-8
// function saveObjectToLocalStorage(object) {
//     Object.keys(object).forEach((key) => {
//       const value = object[key];
//       localStorage.setItem(key, JSON.stringify(value));
//     });
    
//     // Retrieve each property from localStorage and add to new object
//     const newObject = {};
//     Object.keys(object).forEach((key) => {
//       const storedValue = localStorage.getItem(key);
//       if (storedValue) {
//         newObject[key] = JSON.parse(storedValue);
//       }
//     });
    
//     return newObject;
//   }
//   const myObject = { name: "Mahnoor", age: 20 };
//   const newObject = saveObjectToLocalStorage(myObject);
//   console.log(newObject);
  

  
  
  

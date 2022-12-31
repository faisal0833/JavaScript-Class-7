// // JavaScript Object
// // Array Example
// const userArray = ["Faiza", "Kabir", 2018, "Nursary"];
// console.log(userArray);
// console.log(userArray[0]);

// // Object Example
// const userObject = {
//     firstName: "Faiza",
//     lastName: "Kabir",
//     birthYear: 2018,
//     className: "Nursary",
// };
// console.log(userObject);
// console.log(userObject["firstName"]);
// console.log(userObject.firstName);
// console.log(userObject.birthYear);

// // Add New item
// // Example 1
// userObject.hobby = "Drawing";
// console.log(userObject);
// console.log(userObject.hobby);

// // Example 2
// userObject["birthPlace"] = "Rangpur";
// console.log(userObject["birthPlace"]);

// //Another object Example
// const userObjectTwo = {
//     firstName: "Faisal",
//     lastName: "Kabir",
//     isJob: true,
//     calculateAge: function (birthYear){
//         return 2022 - birthYear;
//     },
// };
// console.log(userObjectTwo.isJob);

// console.log(userObjectTwo.calculateAge(1988));
// console.log(userObjectTwo["calculateAge"](1988));

// // This Keyword
// const userObjectTwo = {
//     firstName: "Faisal",
//     lastName: "Kabir",
//     birthYear: 1988,
//     isJob: true,
//     calculateAge: function (){
//         return 2022 - this.birthYear;
//     },
//     userDetails: function (){
//         return `This is user ${this.firstName} ${this.lastName}, born in ${this.birthYear}!`;
//     }
// };
// console.log(userObjectTwo.calculateAge());
// console.log(userObjectTwo.userDetails());

// JavaScript loop
// For loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for(let task = 1; task <= 3; task++){
//     console.log(`Task ${task}`);
// }

// for(let i = 1; i <= 3; i++){
//     console.log(`Task ${i}`);
// }

// While loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// let i = 1;
// while(i <= 8){
//     console.log(`Task ${i}`);
//     i++;
// }

// // Array
// const newArray = [
//     "Data 1",
//     "Data 2",
//     "Data 3",
//     "Data 4",
//     "Data 5",
//     "Data 6",
//     "Data 7",
//     "Data 8"
// ];
// console.log(newArray);
// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);
// // console.log(newArray[3]);
// // console.log(newArray[4]);
// console.log(newArray.length);

// for (let i = 0; i < newArray.length; i++){
//     console.log(newArray[i]);
// }

// for (let i = newArray.length - 1; i >= 0; i--){
//     console.log(newArray[i]);
// }

// // Loop Break
// for (let i = 0; i < newArray.length; i++){
//     if(i == 4) break;
//     console.log(newArray[i]);
// }

// // Loop continue
// for (let i = 0; i < newArray.length; i++){
//     if(i == 4) continue;
//     console.log(newArray[i]);
// }

// Array
const newArray = [
    "Data 1",
    "Data 2",
    "Data 3",
    "Data 4",
    "Data 5",
    "Data 6",
    "Data 7",
    "Data 8"
];
console.log(newArray);

// IndeOf
console.log(newArray.indexOf("Data 7"));
console.log(newArray.indexOf("Data 9"));

// includes
console.log(newArray.includes("Data 5"));
console.log(newArray.includes("Data 9"));
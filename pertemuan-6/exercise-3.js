//Array exercise
let people = ["Greg", "Mary", "Devon", "James"];
// //1
// for(let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// };

// //2
// people.forEach(function(item) {
//     console.log(item);
// });

//3
people.shift();
console.log(people);

//4
people.pop();
console.log(people);

//5
people.unshift("Matt");
console.log(people);

//6
people.push("Angel");
console.log(people);

// //7 
// for (let i = 0; 1 < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//         break;
//     }
// };

// //8 
// let people2 = people.slice(2, 4);
// console.log(people2);

//9
people.splice(2, 1, "Elizabeth", "Artie"); 
console.log(people); 
 
//10
let withBob = ["Bob"];
let people3 = people.concat(withBob);
console.log(people3); 

//Object Execise
let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//1 
programming.languages.push("Go");
console.log(programming);

//2
programming['difficulty']= 7;
console.log(programming);

//3
delete programming.jokes;
console.log(programming);

//4
programming.isFun = true
console.log(programming);

//5
let updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);
updatedLanguages.forEach(updatedLanguage => console.log(updatedLanguage));
/*const cars=["bmw","volvo"];
console.log(cars[1]);
console.log(cars.length);
console.log(cars.sort());

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

cars.forEach((item, index)=>{
	console.log(index, item);
})

cars.push("MG");
cars.forEach((item, index)=>{
	console.log(index, item);
})

document.getElementById("demo").innerHTML = cars.toString();
document.getElementById("demo").innerHTML = cars.join(" - ");

console.log(cars.pop());
console.log("---------");
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log("---------");
console.log(cars.shift());
console.log("---------");
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
    console.log("---------");
}

cars.unshift("Lemon","tr");
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log("---------");
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
console.log("---------");

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat());
console.log("---------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(3, 0, "Lemon", "Kiwi");
console.log(fruits);
console.log("---------");*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const newfruits= fruits.slice(1,4);
newfruits.forEach((item, index)=>{
	console.log(index, item);
})
console.log("---------");
const santance='my name is itay';
const newsantance=santance.split("");
console.log(newsantance);


const arr = ["3", "4", "5", "6"];

const modifiedArr = arr.map((element)=>{
   if(element!="4"){
   return element+"aaaa";
   }
});

console.log(modifiedArr);


const digit=[4,5,8,9];
const newdigit= digit.filter(function(value){
    return value>=5;
})


console.log(newdigit);


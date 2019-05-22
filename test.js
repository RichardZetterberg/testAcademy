//Dmytrenko Dmytro 
//Fisrt sort with choosing the type of sort
let numbers=[2,1,3,5,7,4,6,9];
let anotherNumbers=[2,12,38,19,96,100]

var choose = 1;

function sortArray(choose, arr){
	if (Boolean(choose) == false){
		arr.reverse();
		console.log(arr);
	}
	else if (Boolean(choose) == true){
		arr.sort();
		console.log(arr)
	}
	else console.log('Error');
}

sortArray(choose, numbers);
sortArray(choose, anotherNumbers);

//finds unic symbol
let arrayUnic=[1,1,1,4,4,2,2,5];
function findUnic(arr) {
  var result = [];
  next:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue next; 
      }
      result.push(str);
    }

  return result;
}
let res = findUnic(arrayUnic);
console.log(res);

//number of methods in objectу and output on console
let obj = {
  energy: 300,
  sleep: 10,
  cleverness: 30,
  astral: 0
};
let count = 0;

for (let key in obj) {
  count++;

}

function output(){
	console.log(`energy = ${obj.energy}`);
	console.log(`sleep = ${obj.sleep}`);
	console.log(`cleverness = ${obj.cleverness}`);
	console.log(`astral = ${obj.astral}`);
	console.log(`Counter = ${count}`);
}
output();


//formatting data
let date = new Date(2011, 0, 1, 2, 3, 4, 567);

function outputDate(date){
	if(date.getMinutes() < 10){
		console.log(`${date.getHours()}:0${date.getMinutes()}-${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getHours() < 10){
		console.log(`0${date.getHours()}:${date.getMinutes()}-${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getMonth() < 10){
		console.log(`${date.getHours()}:${date.getMinutes()}-0${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getMonth() < 10 && date.getHours() < 10){
		console.log(`0${date.getHours()}:${date.getMinutes()}-0${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getMonth() < 10 && date.getMinutes() < 10){
		console.log(`${date.getHours()}:0${date.getMinutes()}-0${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getHours() < 10 && date.getMinutes() < 10){
		console.log(`0${date.getHours()}:0${date.getMinutes()}-${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
	if(date.getHours() < 10 && date.getMinutes() < 10 && date.getMonth() < 10){
		console.log(`0${date.getHours()}:0${date.getMinutes()}--${date.getMonth()}:${date.getDay()}:${date.getYear()}`);
	}
}

outputDate(date);




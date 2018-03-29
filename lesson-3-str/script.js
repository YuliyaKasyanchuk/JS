let str = 'урок-3-был слишком легким',
	substr,
	index,
	arr = [20, 33, 1, 'Человек', 2, 3],
	arrNumber = [],
	res = 0,
	total = 0;


str = str.slice(0,1).toUpperCase() + str.slice(1);
str = str.replace(/\-/g , ' ');
// index = str.indexOf('легким');

substr = str;
substr = substr.replace(' слишком ', ' ').replace('был', 'было').replace('им', 'o');
console.log(substr);
console.log(str);

function countRes(arr){
	
	for(let i = 0; i< arr.length; i++){

		if(typeof(arr[i]) === 'number'){
			arrNumber[i] = Math.pow(arr[i], 3);
			res += arrNumber[i];
		}
		else{
			continue;
		}

	}
	let result = Math.sqrt(res);
	return result;
}

console.log (countRes(arr));


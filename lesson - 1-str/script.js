var num = 33721;
var arr = [];

// var multi = function(num){
// 	var res = 1;
// 	while(num){
// 		res *= num%10;
// 		num = Math.floor(num/10);
// 	}

// 	return res;
// };


// alert(multi(33721));


var multi = function(num){
	var res = 1;

	for(var i = 0; i < num.toString().length; i++){
		arr.push(+num.toString()[i]);
		res *= arr[i];
		
	};
	return res;
};

var pow = Math.pow(multi(33721), 3);
console.log(multi(33721));
console.log(pow);




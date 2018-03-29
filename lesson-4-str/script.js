var matrix = [ [], [] ];

function countSumm(){
	var amount = +prompt('Сколько массивов включить в матрицу ', '');
	var summ = 0;
	for (let i = 0; i < amount; i++){
		matrix[i] = [];

		for(let j = 0; j < 5; j++){
			matrix[i][j] = Math.floor(Math.random()*10);
			summ +=matrix[i][j];
		}
		
	}
	console.log(matrix);
	return summ;
}


console.log(countSumm());



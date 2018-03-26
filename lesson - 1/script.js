var summ = +prompt('Ваш бюджет', '1000' );
var title = +prompt('Название вашего магазина', 'название' );
var mainList = {
	summ: summ,
	shopTitle: title,
	shopGoods: {
		pens: 'Pens',
		pensils: 'Pensils',
		notebooks: 'Note Books'
	},
	employers: {
		employer1: 'John Smith',
		employer2: 'Lisa Tomas'
	},
	open: true


};
 var answer = [];
for (var i = 0; i < 3; i++){
	answer.push(prompt('Какой тип товаров будем продавать?'));
	
};
 console.log (answer);
 var summForDay = summ / 30;
 console.log ('Ваш бюджет на день ' + summForDay );

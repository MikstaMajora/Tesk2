var arr = []; // объявляем массив
arr[0]={
	name: 'Vasya',
	class: 6,
	mark: 4
}
arr[1]={
	name: 'Petya',
	class: 5,
	mark: 3
}
arr[2]={
	name: 'Tolya',
	class: 7,
	mark: 5
}
arr[3]={
	name: 'Katya',
	class: 6,
	mark: 4
}
arr[4]={
	name: 'Galya',
	class: 6,
	mark: 4
}
arr[5]={
	name: 'Semyon',
	class: 5,
	mark: 3
}
arr[6]={
	name: 'Kira',
	class: 7,
	mark: 5
}
arr[7]={
	name: 'Senya',
	class: 7,
	mark: 4
}
arr[8]={
	name: 'Vanya',
	class: 6,
	mark: 3
}
arr[9]={
	name: 'Alyona',
	class: 6,
	mark: 5
}
arr[10]={
	name: 'Anton',
	class: 5,
	mark: 4
}
arr[11]={
	name: 'Misha',
	class: 5,
	mark: 3
}
function average_mark(num_class=0){
	let count=0;
	let len=0;
for (i=0;i < arr.length;i++){
	if (num_class==0){
	count=count+arr[i].mark;
	len++;
	}
	else if (arr[i].class==num_class){
	count=count+arr[i].mark;
	len++;
	}
}
	return count/len;
}
arr2=arr.sort((a,b)=>a.mark>b.mark? 1 : -1);
arr2=arr2.splice(arr2.length-5,5);
arr2.sort((a,b)=>a.name>b.name ? 1 : -1);
console.log('Средняя по школе    '+average_mark());
console.log('Средняя по классу   '+average_mark(5));
console.log('Топ 5 учащихся');
console.log(arr2);
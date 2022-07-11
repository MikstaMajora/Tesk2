function isObjectsEqual(obj1,obj2){
	//Получаем все свойства каждого из объектов
  obj1_props = Object.getOwnPropertyNames(obj1);
  obj2_props = Object.getOwnPropertyNames(obj2);
    if (obj1_props.length !== obj2_props.length) {
    return false;//Проверка на равность размерности
  }
  for (let i = 0; i < obj1_props.length; i += 1) {
    prop = obj1_props[i];
	bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
    if ((!bothAreObjects && (obj1[prop] !== obj2[prop]))//Проверка на равенство
    || (bothAreObjects && !isObjectsEqual(obj1[prop], obj2[prop]))) {//Если оба объекты, для них выполняется рекурсия и проверка начинается сначала
      return false;
  }
  }

  return true;
}
student1 = {
  name:'Vanya',
  phone:{father:'89421421433',mother:'89421421424'},
  class:6,
  mark:4
};

student2= {
  mark:4,
  name:'Vanya',
  class:6,
  phone:{mother:'89421421424',father:'89421421433'}
};
console.log(isObjectsEqual(student1,student2));
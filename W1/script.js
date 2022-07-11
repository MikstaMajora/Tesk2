let tree={
firstLevelFirstField: {
secondLevelFirstField: 1,
secondLevelSecondField: {
thirdLevelFirstField: 'a2',
thirdLevelSecondField: {
fourthLevelFirstField: {
fifthLevelFirstField: 'a2',
fifthLevelSecondField: 5,
fifthLevelThirdField: 'School'
}
          		},
          		thirdLevelThirdField: {},
          		thirdLevelFourthField: 500
        	},
        	secondLevelThirdField: {},
        	secondLevelFourthField: {
          		thirdLevelFirstField: 'JavaScript',
          		thirdLevelSecondField: 'margin auto',
          		thirdLevelThirdField: '!important is evel'
        	},
        	secondLevelFifthField: 'Async'
},
firstLevelSecondField: 'easy',
firstLevelThirdField: 123,
firstLevelFourthField: {
secondLevelFirstField: 'React.js',
        	secondLevelSecondField: {
          		thirdLevelFirstField: 42
        	}
}
};
function DrawTree(tree,node=0,lvl=0,ch='|--'){
for (let key in tree) {
  // значения ключей
  if (typeof(tree[key])=='object' && lvl<node || typeof(tree[key])=='object' && node==0)
  {
	console.log('%c'+'  '.repeat(lvl)+ch+key,'color:rgb(65, 125, 181)')
	DrawTree(tree[key],node,lvl+1);
  }
  else console.log('%c'+'  '.repeat(lvl)+ch+tree[key],'color:red');
}
}

function FindFile(tree,file,find=false){
for (let key in tree) {
  // значения ключей
  if (typeof(tree[key])=='object' && find!=true)
  {
	if (FindFile(tree[key],file)==true)
		return true;
  }
  else if(tree[key]==file) 
  {return true;
   find=true;
  }
}
return false;
	}

DrawTree(tree);
node=prompt('Введите заданную вложенность');
console.log('%c*******************************************************************************************','color:green');
DrawTree(tree,node);
console.log(FindFile(tree,'a2'));
console.log(FindFile(tree,'a2design'));
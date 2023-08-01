// object literal { key: value }
// new object()
// object.create();
// key - 문자, 숫자, 문자열, 심볼 Symbol
// value - 원시값, 객체 (함수)

let person = {
  name: 'nami',
  'default-mode': '😃', // 문자열 사용시 특수문자 사용 가능
  0: 1,
  ['study-mode']: '🤓',
};

person.emoji = '🩵';

const obj = {
  name: 'nami',
  age: '27',
  hobby: 'watching movie',
};

// 코딩하는 시점에 정적으로 접근이 확정되는 방식.
obj.name;
obj.age;
console.log(obj);

// 동적으로 속성에 접근하고 싶을 때는 대괄호 표기법을 사용할 수 있다.
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'software engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, 'hobby');
console.log(obj);

export const object = {
  person,
  obj,
  getValue,
  addKey,
  deleteKey,
};

const json = '{"result": true, "count": 42}';
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
const string = JSON.stringify(obj);
console.log(string);
const data = [{
  name: 'test1',
  age: 23
}, {
  name: 'test2',
  age: 33
}, {
  name: 'test3',
  age: 20
}];
const jsx = createElement("ul", {
  className: "list"
}, createElement("li", {
  "v-for": "item in data"
}, createElement("span", null, {
  name
}), createElement("span", null, {
  age
})));


render(jsx, document.getElementById('root'));

// const jsx = <ul className="list">
//     <li v-for="item in data">
//       <span>{{name}}</span>
//       <span>{{age}}</span>
//     </li>
// </ul>
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 ,a:2};

// const returnedTarget = Object.assign(target, source);
// console.log(target);
const source = {
    id:'1',
    title: 'Physics Textbook',
    price: '100 rs'
}
const assignTarget = Object.assign(target={},source);
console.log(assignTarget);
console.log(target);
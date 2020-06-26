let p = document.querySelector('#date');
let date = new Date();

p.innerHTML = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
console.log(date)
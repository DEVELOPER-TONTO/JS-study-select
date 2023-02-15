//array

// let car = ['소나타' , 50000 , 'white'];
// car[3] = '아반떼';

//object - 이름을 붙여야함

// let car2 = {name : '소나타' , price : [50000 , 30000]}
// document.querySelector('.p-3').innerHTML = car2['name'] + " / " + car2['price'];
// document.querySelector('.p-3').innerHTML = car2.price[1];
// car2.price = 60000;
// console.log(car2['name']);

let card = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]

for(let i = 0; i<3; i++){
    document.querySelectorAll('.card-title')[i].innerHTML = card[i].title;
    document.querySelectorAll('p')[i].innerHTML = `가격은: ${card[i].price}`;
}
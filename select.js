let pants = [28, 30, 32, 34];
let shirts = [95, 100, 105];

document.querySelector("#type").addEventListener("input", function (e) {
  let val = document.querySelector("#size");
  val.classList.remove("hide");
  val.innerHTML ='';
  if (e.currentTarget.value == "셔츠") {
    shirts.forEach(function (a) {
    //   $("#size").append(`<option>${a}</option>`);
    val.insertAdjacentHTML('beforeend' , `<option>${a}</option>`);
    });
  }
  if (e.currentTarget.value == "모자") {
    val.classList.add("hide");
  } 
  else if (e.currentTarget.value == "바지") {
    val.classList.remove("hide");
    val.innerHTML ='';
    // document.querySelector('#size').innerHTML =
    // `<option>28</option> <option>30</option>`;

    pants.forEach( (a) => {
    //   $("#size").append(`<option>${a}</option>`);
    val.insertAdjacentHTML('beforeend' , `<option>${a}</option>`);
    });
  }
});

//object 자료 갯수만큼 반복문
let obj = {name : 'kim' , age : 20}

for(let key in obj){
    console.log(obj[key]);
}

//js로 html 생성

// let a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// let tem = '<p>안녕</p>'
// document.querySelector('#test').insertAdjacentElement('beforeend', tem);
// $('#test').append(tem);

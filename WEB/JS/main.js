//String (문자 데이터)
// 따옴표를 사용합니당.

let myName = "박용범";
let hello = `안녕 내 이름은 ${myName}이야`

console.log(hello);

//Number (숫자 데이터 정수 및 부동소수점)
let myNumber = "960201"
let myBirth = `안녕 내 생년월일은 ${myNumber}이야`

console.log(myBirth);

//Boolean (불린 데이터 참거짓)
let answer = true;
let wrong = false;

console.log(answer);
console.log(wrong   );

// undefined (값이 할당되지 않은 상태) - js의 특징
let undef;
console.log(undef);

// null (어떤 값이 의도적으로 비어있음)
let nul;
console.log(nul);

// object (여러 값을 딕셔너리 형태로 저장)

let user = {
    name: "tom",
    age: 26,
    address: "수원",
    checked: true
};

console.log(user.name);

// Array (여러 값을 배열 형태로 저장)

let username = ["tom","수원", "지수원"];


console.log(username[2]);

// let은 재할당이 가능
// const는 재할당이 불가능

let boxEl = document.querySelector('.box');
console.log(boxEl);
// boxEl.addEventListener();
// boxEl.addEventListener(1, 2);
// boxEl.addEventListener('click', 2);
boxEl.addEventListener('click', function() {
    console.log("Click");
    boxEl.classList.add("Active");
    console.log(
        boxEl.classList.contains('Active')
        );
    if(boxEl.classList.contains('Active'))
    {
        console.log('포함됨!');
    };
    // boxEl.classList.remove('Active');
});

if(true);


const boxEls = document.querySelectorAll('.box');
boxEls.forEach(function(boxEl, index) {
    boxEl.classList.add(`order-${index+1}`);
    console.log(index, boxEl);
})
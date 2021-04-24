const email = document.querySelector('#exampleInputEmail1');
const name = document.querySelector('#exampleInputPassword1');
const comment = document.querySelector('#comment');
const divCaptcha = document.querySelector('.captcha');
const inputCaptcha = document.querySelector('.inputCaptcha');
const btn = document.querySelector('.btn');
const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userComment = document.querySelector('.user-comment');

const url1 = 'https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/number_';
const url2 = '_green-256.png';

let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);
let n3 = Math.floor(Math.random()*10);
let n4 = Math.floor(Math.random()*10);
let n5 = Math.floor(Math.random()*10);
let strCaptcha=`${n1}${n2}${n3}${n4}${n5}`;
divCaptcha.innerHTML = `
<img src="${url1}${n1}${url2}" class="c">
<img src="${url1}${n2}${url2}" class="c">
<img src="${url1}${n3}${url2}" class="c">
<img src="${url1}${n4}${url2}" class="c">
<img src="${url1}${n5}${url2}" class="c">`;


btn.onclick = function(){
    if(email.value != '' && name.value != '' && comment.value != ''
     && inputCaptcha.value == strCaptcha){
         userName.innerText = name.value;
         userEmail.innerText = email.value;
         userComment.innerText = comment.value;
     }
     else{
         alert('Заполните поля');
     }
}
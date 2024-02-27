//1)უნდა გვქონდეს სამი ინფუტი და ამ სამ ინფუტში უნდა შეგვყავდეს
//width, height, backgroundColor და button რომ დავაკლიკებთ
//როგორც გუშინ ვნახეთ უნდა შექმნას კუბი.


const width = prompt("width");
const height = prompt("height");
const box_backgroundColor = prompt("backgroundColor");

import { createBox } from "./style.js";
createBox(width, height, box_backgroundColor);

//2)უნდა გვქონდეს სამი card და ამ სამ ქარდში უნდა გვქონდეს განსხვავებული
//title, description, img და ეს უნდა დავწეროთ პარამეტრ არგუმენტით.
//ბოლოს გაიტანე სხვა ფაილში ეს ფუნცია და შემოაიმპორტე მთავარში app.js - ში



import {box} from "./style.js";
box("grid", "center", "center", "center", "300px", "300px", "FloralWhite", "20px","20px",  "HTML", "https://cdn-icons-png.flaticon.com/512/174/174854.png","HTML is the standard markup language for Web pages.");
box("grid", "center", "center", "center", "300px", "300px", "Gainsboro", "20px", "20px","CSS", "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png","CSS is the language we use to style an HTML document.");
box("grid", "center", "center", "center", "300px", "300px", "GhostWhite", "20px", "20px", "JS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshmob4BF86aGKJnQx36peCRfhjRgOK6qO-OgpQ2XKrdximXWlry8rpcAnpdckKtHkSmo&usqp=CAU","JavaScript is the world's most popular programming language.");

 
const input1 = document.getElementById('input1');
const button = document.getElementById('button');
const result = document.getElementById('result');


let list = [];
button.addEventListener('click', () => {
    const todo_value = input1.value;
    list.push(todo_value);
    console.log(list);

    localStorage.setItem('todo',JSON.stringify(list))
    const getItem = JSON.parse(localStorage.getItem('todo'));

    getItem.forEach((task) => {
        result.innerHTML = `
       <li>${task}</li>`
    })
    input1.value = "";
 })

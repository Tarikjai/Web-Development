let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
img1.setAttribute("src", `./images/dice${randomNumber1}.png`);



let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img2 = document.querySelector(".img2");
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML ="Draw"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 Wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 2 Wins  "
}
 


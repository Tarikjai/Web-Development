 
var buttons = document.querySelectorAll(".drum")
 
 
// function when we click
 
 for (i=0 ; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function  ()  {

      var buttonInnerHTML =  this.innerHTML;
      makesound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML)
      
});
}

// 1 function when we Type

document.addEventListener("keydown", function(event) {
   makesound(event.key);
   buttonAnimation(event.key);
})


//function to make the sound 

function makesound(key) {
   
   switch (key) {
      case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;

      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
      case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

      case "j":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
      case "k":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
      case "l":
         var kickbass = new Audio("sounds/kick-bass.mp3");
         kickbass.play();
         break;             
      default: console.log(innerHTML)
         break;
   }  
}

function buttonAnimation(currentKey) {
   var activButton = document.querySelector("." + currentKey);
   activButton.classList.add("pressed");
   setTimeout(function(){
      activButton.classList.remove("pressed")
      
   },200)


}













function title(callback, input){
   var name = input;
   callback(name)
}


function display(name){
   document.getElementsByTagName("h1")[0].innerHTML = name;
}


title(display, "salam tarik")
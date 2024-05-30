$('h1').addClass("big-title margin-50")

$('h1').text('Salut')

$('h1').click( function(){
    $('h1').css("color","purple")
})


$('button').html("<em>Hey</em>");
//$("button").eq(1).css("color", "red");  // Sélectionne le deuxième bouton et change sa couleur de texte en rouge


$("a").attr('href',"https://yahoo.com");

/*
for (var i=0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = 'purple';
    })
}
*/
/*
$("button").click(function(){
    $("h1").css("color","purple");
})*/


$(document).keydown(function(event){
    $('h1').text(event.key)

})
/*
$("h1").before('<button>New</button>')
$("h1").after('<button>New</button>')
$("h1").prepend('<button>New</button>')
$("h1").append('<button>New</button>')
$("button").remove();*/
/*
$("button").click(function(){
    $("h1").hide();
})*/

$("button").click(function(){
    $("h1").fadeToggle();
})

$("button").click(function(){
    $("h1").slideToggle();
})
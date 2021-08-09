let nevem = "Livia";
let korom = 34;
console.log('A javascript is betoltott');
console.log(korom);
if (korom>=18) {
    console.log('mar eleg idos hogy igyon egy sort');
} else{
  console.log('még nem léphetsz italboltba'); }

  // jquery rész be van már ipmortálva
 let szovegazoldalon = $("h1").text();
console.log(szovegazoldalon);
$("h1").text('Ezt javascriptbol valtoztattam meg');
console.log ($(".sarga").css ('background'));
$(".sarga").css ('background-color', 'magenta');
$("li").css ('background-color', 'lime');
//$('p').text ('alma');
$('p').html ('alma ami <strong>nagyon</strong> fontos')
//$('ul').html('<li>ujabb elem</li>') kitölri a felsorolásokat, csak ez az új marad

//$('.sarga').remove();
//$("li:last-of-type").toggleClass('sarga') //adhatunk neki paramétert, ha rajta van az elemen hogy sárga akkor leveszi, ha nem akkor ráteszi, olyan mint a villanykapcsoló


$('#hozzaad').click(function(){
    $('ul').append('<li>ujabb elem</li>') //hozzáfűzi atz új elemet
});
$('#torlo').click(() =>{ 
    $("li:last-of-type").remove()
}); //törlünk egy elemet


//ciklusok
for (let i=0; i<100; i=i+1){
    $('ul').append(`<li>${i}.nem csalok tobbet a vizsgan</li>`)
}

let szinek= ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal'];
//szint kérünk be hogy a funkció lefuthasson

function egyszindoboz (szin){
    $('.kontener').append('<div class="box"></div>');
    $('.kontener div:last-of-type').css('background-color', szin);
}
egyszindoboz('lime')
egyszindoboz('pink')

szinek.forEach(egyszindoboz)
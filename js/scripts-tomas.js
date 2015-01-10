
//...
$(".kliknav").click(function(){
  $(".nav").slideToggle(600);
});

//...
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

//Maak afbeeldingen vasstaand als je ervoorbij scrollt.
$(".side-image").sticky({topSpacing:0});



//dit zijn de footnotes

$(function(){

  $('.toggle-footnote').on('click', function(e){
    
    e.preventDefault();
   
    //Als je de sidenote al zichtbaar was: 
    if( $('.linksvak[data-id=' + $(e.target).text() + ']').is(':visible') ){
      $('.linksvak[data-id=' + $(e.target).text() + ']').hide();
      return;//en stop met uitvoeren van deze functie.
    }
   
    //Verberg alle open linksvakken. 
    $(".linksvak").hide();

    //Anders: toon sidenote
    $('.linksvak[data-id=' + $(e.target).text() + ']').show();

  });

});
$(document).ready(function(){
  $('.modal').modal('show');
});






function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1500);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    //$(this).next().toggle();
    $(this).next().slideToggle(500);
    $(this).toggleClass('active');
   // $(this).text('Passage viewed');
  });
};

 $(document).ready(main);

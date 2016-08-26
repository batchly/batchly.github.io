
$(document).ready(function(){
  $('.hamburger').on('click',function(event){
      event.preventDefault();
      $('.batchly-menu').fadeToggle();
  });
});

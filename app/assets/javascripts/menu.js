$(document).ready(function() {
  menu_open = false;
  $('#button').click(function() {
    $('#menu').toggle(function(){
        if(menu_open) {
          $('#button').html('Menu');
          menu_open = false;
        }else{
          $('#button').html('Close Menu');
          menu_open = true;
        };
    });   
  });
});
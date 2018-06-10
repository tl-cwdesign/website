$(document).ready(function(){

  // Menu Toggle
  $('#menu_toggle').click(function(e) {
    e.preventDefault();
		$(this).toggleClass('open');
		if ($('#menu_drawer').hasClass('open')) {
			$('#menu_drawer').fadeOut(300, function() {
			     $(this).removeClass('open');
			});
		} else {
			$('#menu_drawer').fadeIn(300, function() {
				$(this).addClass('open');
			});
		}
  });

  $(document).keydown(function(event){
  	if (event.keyCode == 27){
      if($("#bathroom_modal").css("display") == "block") {
        $("#bathroom_modal").css("display", "none");
      }
      else if ($("#lounge_modal").css("display") == "block") {
        $("#lounge_modal").css("display", "none");
      }
      else if ($("#downstairs_modal").css("display") == "block") {
        $("#downstairs_modal").css("display", "none");
      }
  	}
  });

});

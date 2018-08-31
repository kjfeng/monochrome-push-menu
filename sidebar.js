$(document).ready(function() {

  var timesClicked = 0;

  // toggle sidebar function
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-right");
    $(".sidebar-item").toggleClass("active");
    $(".note").toggleClass("active");
  }

  // toggle sidebar by clicking button
  $(".button").on("click tap", function() {
    timesClicked++;
    toggleSidebar();
  });

  // retract sidebar by clicking main body
  $("main").on("click tap", function() {
    if (timesClicked % 2 != 0) {
      timesClicked++;
      toggleSidebar();
    }
  });

  // toggle sidebar by clicking 'esc' key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});

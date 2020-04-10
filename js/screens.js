function hideScreens() {
    $(".content").hide();
  }


  $(document).ready(function() {

    $(".nav-link").on("click", function(){
      hideScreens();
      var target = $(this).attr("href");
      $(target).show();
      $(target).load("page_content/_" + target.replace("#","") + ".html");
    });

    $(".navbar-brand").on("click", function(){
      hideScreens();
      var target = $(this).attr("href");
      $(target).show();
      $(target).load("page_content/_" + target.replace("#","") + ".html");
    });
  });
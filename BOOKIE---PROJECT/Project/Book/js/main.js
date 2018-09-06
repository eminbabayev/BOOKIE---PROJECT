$(document).ready(function () {

  $(function() {
    $('#example').barrating({
      theme: 'fontawesome-stars',
      readonly :'true',
      initialRating:'4'
    });
 });




  if($(this).width()>=992){
    $(".navbar").addClass("navbar-expand-md")
  }
  else{
    $(".navbar").removeClass("navbar-expand-md")
  }
  //loader
 function handlePreloader() {
  if($('.preloader').length){
    $('.preloader').delay(200).fadeOut(500);
  }
  }
 
      handlePreloader();



      $(window).click(function(e){
        if(!$(".show-card").is(e.target)&& !$(".fa-shopping-basket").is(e.target ) && $(".show-card").has(e.target).length == 0){
          $(".show-card").hide(); 
        };
        
      });
      

  // Start Navbar
  $(".dropdown-btn").click(function () {
   $(this).prev().slideToggle("slow")
  })

  $(".navbar-toggler").click(function () {
    $(".mycollap").slideToggle("slow");
  });

  $(".basket").click(function(){
    $(".show-card").toggle();
  })

  $(window).resize(function(){
    if($(this).width()>=992){
      $(".navbar").addClass("navbar-expand-md")
    }
    else{
      $(".navbar").removeClass("navbar-expand-md")
    }
  })
// End Navbar



// Start Card-Section
$(window).resize(function(){
  if($(window).width()<769){
    $(".my-fluid").removeClass("container").addClass("container-fluid")
  
  }
  else{
    $(".my-fluid").removeClass("container-fluid").addClass("container")
    
  }
})
if($(window).width()<769){
  $(".my-fluid").removeClass("container").addClass("container-fluid")

}
else{
  $(".my-fluid").removeClass("container-fluid").addClass("container")
  
}
// End Card-Section


});
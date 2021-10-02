$(document).ready(function(){
   
    // $('a').mouseover(function (e){
    //    e.preventDefault();
    //     $(this).css('color', '#EA178C');
    //});
   
    $('a').click(function (e){
       e.preventDefault();
       if($('a').hasClass('selected')){
         $('a').removeClass('selected');
        //  $('a').css('color', '#000'); 
       }
       $(this).addClass('selected');
    //    $(this).css('color', '#EA178C');
    });
   
    // $('a').mouseleave(function (e){
    //    e.preventDefault();
    //    if(!($(this).hasClass('selected'))){
    //     //  $(this).css('color', '#000');
    //    }
    // });
  });
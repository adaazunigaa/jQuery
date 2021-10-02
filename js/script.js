//script.js
$(function()
{
    //alert("hello");


    //$(selector).action()

    //$("#box").hide();

    //$("h1").css("color", "blue");




   /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Ada")').css('border','solid 1px red');
    




    
       //jQUERY EVENT METHODS
       
    
       $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 5px red');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() 
    {
        
        $(this).text('you hovered in!');
        
    }, function() 
    {
        
        $(this).text('you hovered out!');
        
    });
    




   
       //--jQUERY CHAINING
     
    
       $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut().css("color", "red").css("background", "yellow");
    
    








///////////////////////////////////////////////////////////////////////////
      // jQUERY HIDE/SHOW
       
    
    // $('h1').hide();
    // $('div.hidden').show();
    
    // $('div.hidden').fadeIn(8000);
    
    $('#box1').click(function() 
    {
        //slow, fast... 
       $(this).fadeTo( 1000, 0.25, function() 
       {
            // this is what happens when the animation is complete
            // it can be blank
           
           $(this).slideUp();
       }); 
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function() {
        $('#box1').slideToggle();
    });





    ////////////////////////////////////////////////////////////////
      /*
       jQUERY ANIMATE
      */
    


       //basic syntax for animate *******************
       // $(".box").animate({}, function(){})


       $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=3px"
        }, 
        function() {
            // animation is complete
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.2"
        }, function() {
            // animation is complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    /* ----------------
       jQUERY CSS
       ---------------- */
    
    $('#circle2').css({
        'background':'#8a8d22',
        'display':'inline-block',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px'
    }).addClass('circleShape');
    

    

});
    






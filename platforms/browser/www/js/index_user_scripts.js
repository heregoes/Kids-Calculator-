/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #add */
    
    
        /* button  #add */
    $(document).on("click", "#add", function(evt)
    {
        /* your code goes here */ 
         var num1 = $('#num1').val();
         var num2 = $('#num2').val();
        
         $('#answer').val(parseFloat(num1) + parseFloat(num2));
    });
    
        /* button  #minus */
    $(document).on("click", "#minus", function(evt)
    {
        /* your code goes here */ 
         var num1 = $('#num1').val();
         var num2 = $('#num2').val();
        
         $('#answer').val(parseFloat(num1) - parseFloat(num2));
    });
    
        /* button  #multiply */
    $(document).on("click", "#multiply", function(evt)
    {
        /* your code goes here */ 
         var num1 = $('#num1').val();
         var num2 = $('#num2').val();
        
         $('#answer').val(parseFloat(num1) * parseFloat(num2));
    });
    
        /* button  #divide */
    $(document).on("click", "#divide", function(evt)
    {
        /* your code goes here */ 
         var num1 = $('#num1').val();
         var num2 = $('#num2').val();
        
         $('#answer').val(parseFloat(num1) / parseFloat(num2));
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

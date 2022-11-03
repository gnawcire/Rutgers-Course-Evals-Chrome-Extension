$(document).ready(function () {


$(document).on("mouseenter", "span.instructors", function(){

    //var .text() the html context and store it as a string variable
    // change var wrapper to + varName + 
    
    var wrapper = "<b class='tooltip'><span>u are hovering rn</span></b>";
          $(this).after(wrapper);
          
         

    

    //also get the -> class name, subject/dept, and put it in the text location
    
    //return the link of the search of the course evals
});

$(document).on("mouseleave", "span.instructors", function(){

    var remove = document.querySelector('b.tooltip');
    remove.parentElement.removeChild(remove);

})

})



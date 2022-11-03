$(document).ready(function () {


$(document).on("mouseenter", "span.instructors", function(){

    
    
    var wrapper = "<b class='tooltip'><span>u are hovering rn</span></b>";
          $(this).after(wrapper);
          
         

    
    //instead of an alert make a box somewhere 
    //also get the parent doms of the instructor -> class name, subject/dept
    
    //return the link of the search of the course evals
});

$(document).on("mouseleave", "span.instructors", function(){

    var remove = document.querySelector('b.tooltip');
    remove.parentElement.removeChild(remove);

})

})



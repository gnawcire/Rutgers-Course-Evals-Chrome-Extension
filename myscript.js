$(document).ready(function () {

$(document).on("mouseenter", "span.instructors", function(){

    var parentId = $(this).closest('span.instructors').parent().attr('id');
    var classId = parentId.substring(0,10);
    var wrapper = "<b class='tooltip'><span>" + classId + "</span></b>";
          $(this).after(wrapper);
    
    //to do: return the link of the search of the course evals
});

$(document).on("mouseleave", "span.instructors", function(){

    var remove = document.querySelector('b.tooltip');
    remove.parentElement.removeChild(remove);

})

})



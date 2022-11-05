$(document).ready(function () {

$(document).on("mouseenter", "span.instructors", function(){
    var spanInstructors = document.getElementsByClassName('instructors');
    console.log(spanInstructors);
    
    var instructorName = $(this).text();
    console.log(instructorName);
    var parentId = $(this).closest('span.instructors').parent().attr('id');
    var classId = parentId.substring(0,10);
    var school = parentId.substring(0, 2);
    var subject = parentId.substring(3, 6);
    var className = parentId.substring(7, 10);

    var link = "https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject;
    var wrapper = "<b class='tooltip'><span>" + classId + "</span></b>";
          $(this).after(wrapper);
   $(this).attr('onclick', "window.location='https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject+ "'")
    
   
   
   // spanInstructors[0].setAttribute('onclick', "window.location='https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject+ "'")
    // spanInstructors.href = "https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject;
    
    //to do: return the link of the search of the course evals
});


$(document).on("mouseleave", "span.instructors", function(){
    //bug: will create multiple if u leave span.instructors but stay in div.sectionData
    var remove = document.querySelector('b.tooltip');
    remove.parentElement.removeChild(remove);
    

})

})



$(document).ready(function () {

$(document).on("mouseenter", "span.instructors", function(){
    var spanInstructors = document.getElementsByClassName('instructors');
    console.log(spanInstructors);
    

    //in case there are multiple professors listed in span.instructors
    var instructorName = $(this).text();
    var actualInstructor = instructorName;
    for (let i =0; i < instructorName.length; i++){
        if (instructorName.substring(i, i+1) == ';') {
            actualInstructor = instructorName.substring(0, i);
            break;
        }

    }
    for (let i = 0; i < actualInstructor.length; i++){
        if(actualInstructor.substring(i, i+1) == ','){
            
            if (actualInstructor.substring(0,i).length < 3){
                actualInstructor = actualInstructor.substring(i+2);
            } 
            else actualInstructor = actualInstructor.substring(0, i);
        }
    }
    //get rid of comma, do first / last name, 

    console.log(instructorName);
    console.log(actualInstructor);
    var parentId = $(this).closest('span.instructors').parent().attr('id');
    var classId = parentId.substring(0,10);
    var school = parentId.substring(0, 2);
    var subject = parentId.substring(3, 6);
    var className = parentId.substring(7, 10);

    var link = "https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + actualInstructor + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject;
    $(this).attr('onclick', "window.location='https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + actualInstructor + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject+ "'")

    //above is the stuff for course evals, below will be for ratemyprofessor
    var rateMyProfessorLink = ""
    if(document.querySelector('b.tooltip') == null){
    var wrapper = "<b class='tooltip'><span>" + classId + "</span></b>";
          $(this).after(wrapper);
    }
    
   
   
   // spanInstructors[0].setAttribute('onclick', "window.location='https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject+ "'")
    // spanInstructors.href = "https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + instructorName + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject;
    
    //to do: return the link of the search of the course evals
    
});


$(document).on("mouseleave", "span.instructors", function(){
    setTimeout(function() {
        if (document.querySelector('b.tooltip') != null){
        var remove = document.querySelector('b.tooltip');
        remove.parentElement.removeChild(remove);
        }
    }, 3000)
    

})

})



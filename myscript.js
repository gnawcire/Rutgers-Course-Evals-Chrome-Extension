$(document).ready(function () {


    //creates button next to each class/professor for course evals and for RMP
    $(document).on("click", 'img', function(){
        
        var spanInstructors = document.getElementsByClassName('instructors');
        console.log(spanInstructors);
       
        var button = $('<input type="button" id = "courseEvalButton" value="Course Evals" class = "ce"/>');
        if (document.getElementById('courseEvalButton') == null){
            $('span.instructors').after(button);
        }

        var button1 = $('<input type ="button" id = "rmpButton" value = "Rate My Professor" class = "rmp" />');
        if (document.getElementById('rmpButton') == null) {
            $('span.instructors').after(button1);
        }
    })
    
    //on hover of instructor name, teacher rating pops up as tooltip (in progress)
    $(document).on("mouseenter", "span.instructors", function() {
        var instructorName = $(this).closest('span.instructors').text();
        var wrapper = "<b class='tooltip'><span>" + instructorName + "</span></b>";
            $(this).after(wrapper);
        
        
        var firstInstructor = instructorName; // full name of the first instructor
        for (let i =0; i < instructorName.length; i++){
            if (instructorName.substring(i, i+1) == ';') {
                firstInsructor = instructorName.substring(0, i);
                break;
            }
        } 
        var lastName; // first instructor last name
        for (let i = 0; i < firstInstructor.length; i++) {
            if (firstInstructor.substring(i,i+1) == ',') {
                lastName = firstInstructor.substring(i+2);
            }
        }
        link = "https://www.ratemyprofessors.com/search/teachers?query=joiner&sid=U2Nob29sLTgyNQ==";
        chrome.runtime.sendMessage({url: link}, async function(response) {
            console.log(response);
            var ratingstring = JSON.stringify(response);
            
            var rating= ratingstring.substring(20,23);
            console.log(rating);
            
            })
        })
    
  
    //takes them to the course eval search
    $(document).on("click", 'input.ce', function(){

        //gets the text of the instructor name for course eval, either first / last name depending on length
        var instructorName = $(this).prev('input.rmp').prev('span.instructors').text();
        console.log(instructorName);
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
        
        console.log(instructorName);
        console.log(actualInstructor);

        //actual link that opens
        var parentId = $(this).prev('input.rmp').prev('span.instructors').closest('span.instructors').parent().attr('id');
        console.log(parentId);
        var classId = parentId.substring(0,10);
        var school = parentId.substring(0, 2);
        var subject = parentId.substring(3, 6);
        var className = parentId.substring(7, 10);
    
        var link = "https://sirs.ctaar.rutgers.edu/index.php?mode=name&survey%5Blastname%5D=" + actualInstructor + "&survey%5Bsemester%5D=&survey%5Byear%5D=&survey%5Bschool%5D=" + school + "&survey%5Bdept%5D=" + subject;
        window.open(link);
    })

    //takes them to rate my professors search
    $(document).on("click", 'input.rmp', function(){

        //gets the name of the instructor
        var instructorName = $(this).prev('span.instructors').text();
        console.log(instructorName);
        var actualInstructor = instructorName;

            for (let i =0; i < instructorName.length; i++){
                if (instructorName.substring(i, i+1) == ';') {
                    actualInstructor = instructorName.substring(0, i);
                    break;
                }
            }
            for (let i = 0; i < actualInstructor.length; i++){
                if(actualInstructor.substring(i, i+1) == ','){
                    actualInstructor = actualInstructor.substring(0, i) + actualInstructor.substring(i+1);
                }
            }
        
        console.log(actualInstructor);
        var link = "https://www.ratemyprofessors.com/search/teachers?query=" + actualInstructor + "&sid=U2Nob29sLTgyNQ=="
        window.open(link);
    })

    
    
    








})



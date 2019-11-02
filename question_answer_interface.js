
$(document).ready(function(){
    // Get the information in the question object and put it into radio buttons.
    
     let questionObject = {
                                   question : 'What colour is the sky at noon?',
                                   answerOptions : ['blue', 'green', 'pink', 'yellow'],
                                   answerCorrect  : 'blue'
                                    }; 
    
    questionText = questionObject.question
    questionCorrect = questionObject.answerCorrect
    questionOptions = questionObject.answerOptions
    
    $('#questionText').text(questionText);
    // Insert questionText string into 'questionText' location in HTML.D
    
    for (c in questionOptions) {
        
        var node = $('#answersButtons').append("<div></div>");
        
        var radioStr = '<input type="radio" name= "answers"' + 'value=' + questionOptions[c] + '/>'  
        var radio = $(radioStr);
        // Make input into a radio button. Give the same name so they become a radio group!
        
        var label = $("<label>").text(questionOptions[c]);
        // Label with the answer choice.
        
        radio.appendTo(node);
        label.appendTo(node);
        
        $("#answersButtons").append(node);
        
    }
        
});

      
 
 $(document).ready(function(){
    $("#sub").click(function() {
    // Get the label of the selected answer (to compare to the correct answer)...
    
           var radioVal = $('input[name="answers"]:checked').val();
           // Get checked value result.
           $('#demo').html('Hello') 
           
           var rightAnswer = radioVal==questionCorrect;
           // Boolean to compare values.

            $('#demo2').html(rightAnswer) 
            

      //var x = document.URL;
             
     // document.getElementById("demo").innerHTML = x ;
            
         
    //}
        });
 });
     

    
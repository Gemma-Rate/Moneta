
$(document).ready(function(){
    // Get the information in the question object and put it into radio buttons.
    
     let questionObject = {
                                   question : 'What colour is the sky at noon?',
                                   answerOptions : ['blue', 'green', 'pink', 'yellow'],
                                   answerCorrect  : 'blue'+'/'
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
 
           var rightAnswer = Boolean(radioVal==questionCorrect);
           // Boolean to compare values.
            
            if (rightAnswer){
            // Let the user go through to the blocked page:
                $('#demo').html([radioVal, questionCorrect, rightAnswer]) 
                var url = document.URL;
                url = url.split('=');
                rightUrl = 'https://'+url[url.length-1]
                $(location).attr('href',rightUrl);
            }
            //else{
                //setTimeout(function(){ alert("Incorrect! You can now try again."); },30000);
                //console.log('timeout')
                
           // }
            

      //
             
     // document.getElementById("demo").innerHTML = x ;
            
         
    //}
        });
 });
     

    
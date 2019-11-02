
$(document).ready(function(){
    $("#btn1").click(function() {
       // Save question data to local browser storage.
     
      var formInput = $('form#question_form input[type="text"]')
      var questionText = formInput[0].value;
      var answerList = formInput[1].value;
      var trueAnswer =formInput[2].value;
      // Get form input data.
      
        // Change inputs into a javascript object:
        
        answerList = answerList.split(',')
        
        let questionObject = {
                                       question : questionText,
                                       answerOptions : answerList,
                                       answerCorrect  : trueAnswer
                                        };                        
        
        alert("Question and answers saved!");
        // Display text box saying the data is saved.
        

      return questionText, questionObject
  
    });
});

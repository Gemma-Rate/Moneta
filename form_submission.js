
function toSave(question, answerList, trueAnswer) {
    // Change inputs into a javascript object.
    
    answerList = answerList.split(',')
    
    let questionInfo = {
                                   question : question,
                                   answerOptions : answerList,
                                   answerCorrect  : trueAnswer
                                    };                        
    
    alert("Question and answers saved!");
    // Display text box saying the data is saved.
    
    return questionInfo
}


function saveQuestion() {
   // Save question data to local browser storage.
 
  var formInput = document.getElementById('question_form');
  var questionText = formInput.elements[0].value;
  var answerList = formInput.elements[1].value;
  var trueAnswer =formInput.elements[2].value;
  // Get form input data.
  
  questionObject = toSave(question, answerList, trueAnswer);
  // Change to javascript object.

  return questionText, questionObject
  
}

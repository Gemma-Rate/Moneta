
function makeDummyQuestion(){
    
        let questionInfo = {
                                   question : 'What colour is the sky at noon?',
                                   answerOptions : ['blue', 'green', 'pink', 'yellow'],
                                   answerCorrect  : 'blue'
                                    }; 
       return questionInfo
}


function questionDataToButton(questionObject) {
    // Get the information in the question object and put it into radio buttons.
    
    var questionText = questionObject['question'];
    var questionOptions = questionObject['answerOptions'];
    var questionCorrect = questionObject['answerCorrect '];
    
    document.getElementById('questionText').innerHTML = questionText;
    // Insert questionText string into 'questionText' location in HTML.
    
    for (c in questionOptions) {
        
        var node = document.createElement("DIV");
        
        var radio = document.createElement('INPUT');
        var label = document.createElement('LABEL');
        
        radio.setAttribute('type', 'radio');
        // Make input into a radio button.
        radio.setAttribute('name', 'answers');
        // Give the same name so they become a radio group!
        
        label.innerHTML = questionOptions[c]
        // Label with the answer choice.
        
        node.appendChild(radio);
        node.appendChild(label);
        document.getElementById("answersButtons").appendChild(node);
    }
        
}
      
    
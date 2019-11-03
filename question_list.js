/* initialize variables */
var inputQuestion = document.querySelector('.question input');
var inputChoices = document.querySelector('.answer_choices input');
var inputCorrect = document.querySelector('.true_answer input');

var addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addQuestion);

var countContainer = document.querySelector('.count');
var listContainer = document.querySelector('.list');

/* generic error handler */
function onError(error) {
  console.log(error);
}

/* display question count on startup */
displayCount();
//displayList();

/* Add a note to the display, and storage */
function addQuestion() {
    // get the input from the text input
    var newQuestion = inputQuestion.value;
    var newChoices = inputChoices.value;
    var newCorrect = inputCorrect.value;

    // store the new question and answer
    var ret = browser.storage.local.set({[newQuestion]: [newChoices, newCorrect]});
    ret.then(() => {
      // redo the list
      displayCount();
      //displayList();
    }, onError);
}

/* Display count of questions */
function displayCount() {
  // clear any existing entries
  while (countContainer.firstChild) {
    countContainer.removeChild(countContainer.firstChild);
  }

  // create display box
  var count = document.createElement('div');
  var countDisplay = document.createElement('div');
  var countPara = document.createElement('p');

  countDisplay.appendChild(countPara);

  // fetch all questions
  var ret = browser.storage.local.get(null);
  ret.then((results) => {
    var questions = Object.keys(results);
    var countNumber = questions.length - 2;

    countPara.textContent = "There are currently " + countNumber + " questions in the database. Add another?";

    /* loop over all addresses
    for (let question of questions) {
      var questionPara = document.createElement('p');
      questionPara.textContent = question;
      countDisplay.appendChild(questionPara);
    }
    */
  }, onError);

  count.appendChild(countDisplay);

  countContainer.appendChild(count);
}

/* Display list of questions */
function displayList() {
    // clear any existing entries
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    // create display box
    var list = document.createElement('div');
    var listDisplay = document.createElement('div');

    // fetch all questions
    var ret = browser.storage.local.get(null);
    ret.then((results) => {
        var questions = Object.keys(results);

        //loop over all addresses
        for (let question of questions) {
        if(question != "blocked") {
            var questionPara = document.createElement('p');
            questionPara.textContent = question;
            listDisplay.appendChild(questionPara);
        }
    }

    }, onError);

    list.appendChild(listDisplay);

    listContainer.appendChild(list);
  }

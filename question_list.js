/* initialize variables */
var inputQuestion = document.querySelector('.question_form.question input');


var addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addAddress);

var addressContainer = document.querySelector('.address-container');

/* generic error handler */
function onError(error) {
  console.log(error);
}

/* display stored addresses on startup */
displayAddresses();

/* Add a note to the display, and storage */
function addAddress() {
  // get the new URL from the text input
  var newAddress = addressInput.value;

  // get the existing addresses
  var ret = browser.storage.local.get("blocked");
  ret.then((result) => {
    var addressList = Object.values(result);
    addresses = addressList[0]

    // add the new address to the list
    addresses.push(newAddress);

    // store the new list of addresses
    var ret = browser.storage.local.set({"blocked": addresses});
    ret.then(
      // redo the list
      displayAddresses(), onError);

  }, onError);
}

/* Display all blocked addresses */
function displayAddresses() {
  // clear any existing entries
  while (addressContainer.firstChild) {
    addressContainer.removeChild(addressContainer.firstChild);
  }

  // create note display box
  var list = document.createElement('div');
  var listDisplay = document.createElement('div');
  var listH = document.createElement('h2');

  listDisplay.appendChild(listH);

  // fetch all addresses
  var ret = browser.storage.local.get("blocked");
  ret.then((result) => {
    var addressList = Object.values(result);
    addresses = addressList[0]

    var countNumber = addresses.length;
    listH.textContent = "There are " + countNumber + " blocked addresses:";

    // loop over all addresses
    for (let address of addresses) {
      var listPara = document.createElement('p');
      listPara.textContent = address;
      listDisplay.appendChild(listPara);
    }
  }, onError);

  // Add a clear all button
  var clearBtn = document.createElement('button');
  clearBtn.setAttribute('class','delete');
  clearBtn.textContent = 'Clear all addresses';
  clearBtn.addEventListener('click',(e) => {
    const evtTgt = e.target;
    evtTgt.parentNode.parentNode.parentNode.removeChild(evtTgt.parentNode.parentNode);
    browser.storage.local.set({"blocked": []});
  });
  listDisplay.appendChild(clearBtn);

  list.appendChild(listDisplay);

  addressContainer.appendChild(list);
}

var inputBoxes = document.querySelectorAll("input[type='text']");

console.log("inputBoxes=", inputBoxes)

// var name = inputBoxes.find(element => element.autocomplete )

var givenName = document.querySelectorAll("[autocomplete='given-name']");

console.log("givenName=", givenName)

givenName.value = "Jonathan"

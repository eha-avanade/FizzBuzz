
function getValues() {

    //Get array values from the page
    let userInput = document.getElementById("arrValues").value;
    const userArray = userInput.split(",");

    //Check that it's an array
    if (Array.isArray(userArray)) {

        //Run FizzBuzz
        let values = fizzBuzz(userArray);

        //Display results
        resultsDisplay(userArray, values);

    } else {
        alert("Please enter comma separated values");
    }
}

function fizzBuzz(userArray) {
    let values = [];

    for (let i = 0; i < userArray.length; i++) {
        if (isNaN(parseInt(userArray[i]))) {
            values.push("Invalid Item");
        }
        else if ((parseInt(userArray[i]) % 3 == 0) && (parseInt(userArray[i]) % 5 == 0)) {
            values.push("FizzBuzz");
        }
        else if (parseInt(userArray[i]) % 3 == 0) {
            values.push("Fizz");
        }
        else if (parseInt(userArray[i]) % 5 == 0) {
            values.push("Buzz");
        } else {
            values.push("Divided " + parseInt(userArray[i]) + " by 3 & 5");
        }
    }

    return values;
}

function resultsDisplay(userArray, values) {

    for (let i = 0; i < userArray.length; i++) {
        const paragraph = document.createElement("p");
        const node = document.createTextNode(userArray[i] + ": " + values[i]);
        paragraph.appendChild(node);
        const element = document.getElementById("results");
        element.appendChild(paragraph);
    }



}
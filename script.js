var mcqsMarks = 0;

function mcqs1() {
    var q1 = document.getElementsByName("mcqs1");
    for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            if (q1[i].value === "d") {
                mcqsMarks++;
                alert("Your answer is correct");
            } else {
                alert("Your answer is incorrect, please try again later");
            }
            break;
        }
    }
}

function mcqs2() {
    var q2 = document.getElementsByName("mcqs2");
    for (var i = 0; i < q2.length; i++) {
        if (q2[i].checked) {
            if (q2[i].value === "a") {
                mcqsMarks++;
                alert("Your answer is correct");
            } else {
                alert("Your answer is incorrect, please try again later");
            }
            break;
        }
    }
}

function mcqs3() {
    var q3 = document.getElementsByName("mcqs3");
    for (var i = 0; i < q3.length; i++) {
        if (q3[i].checked) {
            if (q3[i].value === "d") {
                mcqsMarks++;
                alert("Your answer is correct");
            } else {
                alert("Your answer is incorrect, please try again later");
            }
            break;
        }
    }
}

function mcqs4() {
    var q4 = document.getElementsByName("mcqs4");
    for (var i = 0; i < q4.length; i++) {
        if (q4[i].checked) {
            if (q4[i].value === "a") {
                mcqsMarks++;
                alert("Your answer is correct");
            } else {
                alert("Your answer is incorrect, please try again later");
            }
            break;
        }
    }
}

function mcqs5() {
    var q5 = document.getElementsByName("mcqs5");
    for (var i = 0; i < q5.length; i++) {
        if (q5[i].checked) {
            if (q5[i].value === "a") {
                mcqsMarks++;
                alert("Your answer is correct");
            } else {
                alert("Your answer is incorrect, please try again later");
            }
            break;
        }
    }
}

function result() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    var result = document.createElement("h3");
    result.textContent = "Your Result:";
    var marks = document.createElement("p");
    marks.textContent = mcqsMarks;

    resultDiv.appendChild(result);
    resultDiv.appendChild(marks);
}

function tryAgain() {
    mcqsMarks = 0; // Reset marks
    document.getElementById("result").innerHTML = ""; // Clear results
    // Optionally, you could reset the radio buttons as well
    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function (radio) {
        radio.checked = false;
    });
}

function q2Dispaly(){
  var ques2 = document.getElementById("q2-hide");
  ques2.className = "show";

}

function q3Display(){
    var ques3 = document.getElementById("q3-hide");
    ques3.className = "show";
}

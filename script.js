// Questions will be asked
const Questions = [{
    id: 0,
    q: "When was Disney founded?",
    a: [{ text: "1923", isCorrect: true },
        { text: "1905", isCorrect: false },
        { text: "1931", isCorrect: false },
        { text: "1932", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Before becoming 'The Walt Disney Company' what was it's first name'?",
    a: [{ text: "Laugh-O-Gram Studio", isCorrect: false },
        { text: "Disney Brothers Cartoon Studio", isCorrect: true },
        { text: "Walt Disney Productions", isCorrect: false },
        { text: "The Walt Disney Studio", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What was Disney's first ever film??",
    a: [{ text: "Snow White", isCorrect: false },
        { text: "Sleeping Beauty", isCorrect: false },
        { text: "Alice in Wonderland", isCorrect: true },
        { text: "Steamboat Willie", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What was Disney's first ever cartoon character?",
    a: [{ text: "Minnie Mouse", isCorrect: false },
        { text: "Donald Duck", isCorrect: false },
        { text: "Micky Mouse", isCorrect: false },
        { text: "Oswald the Lucky Rabbit", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "#16bb00";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 3) {
    id++;
    iterate(id);
    console.log(id);
}

})
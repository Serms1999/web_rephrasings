const exam = document.getElementsByTagName("exam")[0];
const answerButtons = Array.from(document.getElementsByClassName("show-answer"));
const buttonPressed = new Array(answerButtons.length).fill(false);

const createRephrasingElement = (original, word, start, end) => {

    const createPElement = (text, className) => {
        const element = document.createElement("p");
        element.setAttribute("class", className);
        element.innerText = text;
        return element;
    }

    const template = document.createElement("div");
    template.setAttribute("class", "rephrasing-element");
    template.appendChild(createPElement(original, "original-phrase"));
    template.appendChild(createPElement(word, "keyword"));

    const question = document.createElement("label");
    question.setAttribute("class", "question");
    question.innerHTML = `${start} <input type=\"text\" name=\"answer\"> <span class="answer" hidden>Answer</span> ${end}`;

    const answerButton = document.createElement("button");
    answerButton.setAttribute("class", "show-answer");
    answerButton.innerText = "Show answer";

    template.appendChild(question);
    template.appendChild(answerButton);

    showAnswerListener(answerButton);

    exam.appendChild(template);
}

const showAnswerListener = button => {
    answerButtons.push(button);
    buttonPressed.push(false);

    button.addEventListener("click", event => {
        if (buttonPressed[buttonPressed.length - 1]) {
            for (let e of button.parentElement.children) {
                if (e.tagName === "LABEL") {
                    for (let e2 of e.children) {
                        if (e2.tagName === "SPAN") {
                            e2.setAttribute("hidden", "");
                        } else if (e2.tagName === "INPUT") {
                            e2.removeAttribute("hidden");
                        }
                    }
                    break;
                }
            }
            button.innerText = "Show answer";

        } else {
            for (let e of button.parentElement.children) {
                if (e.tagName === "LABEL") {
                    for (let e2 of e.children) {
                        if (e2.tagName === "INPUT") {
                            e2.setAttribute("hidden", "");
                        } else if (e2.tagName === "SPAN") {
                            e2.removeAttribute("hidden");
                        }
                    }
                    break;
                }
            }
            button.innerText = "Hide answer";
        }
        buttonPressed[buttonPressed.length - 1] = !buttonPressed[buttonPressed.length - 1];
        event.preventDefault();
    })
}

for (let button of answerButtons.entries()) {
    button[1].addEventListener("click", event => {
        if (buttonPressed[button[0]]) {
            for (let e of button[1].parentElement.children) {
                if (e.tagName === "LABEL") {
                    for (let e2 of e.children) {
                        if (e2.tagName === "SPAN") {
                            e2.setAttribute("hidden", "");
                        } else if (e2.tagName === "INPUT") {
                            e2.removeAttribute("hidden");
                        }
                    }
                    break;
                }
            }
            button[1].innerText = "Show answer";

        } else {
            for (let e of button[1].parentElement.children) {
                if (e.tagName === "LABEL") {
                    for (let e2 of e.children) {
                        if (e2.tagName === "INPUT") {
                            e2.setAttribute("hidden", "");
                        } else if (e2.tagName === "SPAN") {
                            e2.removeAttribute("hidden");
                        }
                    }
                    break;
                }
            }
            button[1].innerText = "Hide answer";
        }
        buttonPressed[button[0]] = !buttonPressed[button[0]];
        event.preventDefault();
    })
}

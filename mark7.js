const textInput = document.querySelector(".textInput");
const btn = document.querySelector(".btn");
const outputRes = document.querySelector(".output");

console.log(textInput);
console.log(btn);
console.log(outputRes);

let url = "https://api.funtranslations.com/translate/minion.json"


function checkUrl (text) {
    return url + "?" + "text=" + text
}

function translateFunc () {

    let textInputValue = textInput.value;
    // console.log("running")

    fetch(checkUrl(textInputValue))
    .then(response => response.json())
    .then(json => console.log(json)
        // { let translatedOutput = json.contents.translated
        // outputRes.innerText = translatedOutput}
        )
}

btn.addEventListener("click", translateFunc)
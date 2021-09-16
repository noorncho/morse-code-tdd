/**
 * DOM Interaction
 */
import * as translator from "./translator.js";

const outputField = document.getElementById("output__user");
const inputField = document.getElementById("input__user");
const translateButton = document.querySelector("#translate");

translateButton.addEventListener("click", () => {
    const userInput = inputField.value;
    outputField.innerHTML = translator.morseOrEnglish(userInput);
});
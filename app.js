/**
 * DOM Interaction
 */
import * as translator from "./translator.js";

const outputField = document.getElementById("user-output");
const inputField = document.getElementById("user-input");
const translateButton = document.querySelector("#translate");

translateButton.addEventListener("click", () => {
    const userInput = inputField.value;
    outputField.innerHTML = translator.translateEnglishToMorse(userInput)
    //outputField.innerHTML = translator.translateMorseToEnglish(userInput);
    //outputField = translator.morseOrEnglish(userInput);
});
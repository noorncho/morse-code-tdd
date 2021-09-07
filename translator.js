/**
 * Contains all function
 */
//Regex for letters
const letters = /^[a-zA-Z ]+$/;
//Regex for Morse Code
const morseLetters = /^[.\-/ ]+$/;
//Track if input is in morse code
let isMorse = false; 

//Morse code objects for letters and numbers
const morseCodeLetters = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
}
const morseCodeNumbers = {
    1: ".----",
    2: "..---", 
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----"
}

/**
 * To ensure that users input is correct, always assuming the input is invalifd until proven otherwise
 * 
 * @param {String} userInput 
 * @returns 
 */
export const validInput = (userInput) =>{
    if(letters.test(userInput)){
        isMorse = false;
        return true;
    }else if(morseLetters.test(userInput)){
        isMorse = true;
        return true;
    }else{
        return false;
    }
}

/*export const morseOrEnglish = (userInput) =>{
    if(isMorse){
        translateMorseToEnglish(userInput);
    }else{
        translateEnglishToMorse(userInput);
    }
}*/

export const translateMorseToEnglish = (morseCode) =>{
    let englishTranslation = "";

    if(validInput(morseCode)){
        const morseCodeArr = morseCode.split(" ");

        for(const morse of morseCodeArr){
            if(morse == "/"){
                englishTranslation += " ";
            }
            const englishLetter = Object.keys(morseCodeLetters).find(key => morseCodeLetters[key] === morse);
            englishTranslation += englishLetter;
        }

    }else{
        return "Invalid Input unable to translate";
    }
    return englishTranslation;
}

export const translateEnglishToMorse = () =>{

    return "This feature is currently unavailable, be come back later";
}


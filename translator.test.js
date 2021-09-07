/**
 * Test file
 */
import * as translator from "./translator.js";

const sosMorse = "... --- ...";
const nameMorse = "-. --- --- .-.";
const helloWorldMorse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."

xdescribe("User has entered a valid input", () =>{
    
    const str4 = "... --- ... / ... --- ..."
    const str2 = "@Noor&Jack*";
    const str3 = "s o s"
    const str5 = "... o s"

    test("Input should not contain unwanted symobols", () => {
        expect(translator.validInput(str2)).toBe(false);
    });

    test("Input should be in either English or Morse Code not both", () => {
        expect(translator.validInput(sosMorse)).toBe(true);
        expect(translator.validInput(str3)).toBe(true);
        expect(translator.validInput(str4)).toBe(true);
        expect(translator.validInput(str5)).toBe(false);
    })
});

xdescribe("Translate from Morse Code to English", () => {
    test("Translate single word Morse Code inputs to English", () => {
        expect(translator.translateMorseToEnglish(".-")).toBe("a");
        expect(translator.translateMorseToEnglish(sosMorse)).toBe("sos");
        expect(translator.translateMorseToEnglish(nameMorse)).toBe("noor");
    });

    test("Translate phrases in Morse Code to English", () => {
        expect(translator.translateMorseToEnglish(helloWorldMorse)).toBe("hello world");
    });
});

describe("Translate from English to Morse Code", () => {
    test("Translate single word English to Morse Code", () => {
        expect(translator.translateEnglishToMorse("sos")).toBe(sosMorse);
    })
})
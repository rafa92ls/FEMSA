
//Validations:
const validLength = word => !!word && word.length >= 4 && word.length <= 25

const beginsWithLetter = word => !!word && /^[a-zA-Z]/.test(word)

const lettersNumbersUnderscoreOnly = word => !!word && /^[a-zA-Z0-9_]+$/.test(word)

const endsWithoutUnderscore = word => !!word && !word.endsWith("_")

//Main function:
const CodelandUsernameValidation = username =>
    validLength(username) &&
    beginsWithLetter(username) &&
    lettersNumbersUnderscoreOnly(username) &&
    endsWithoutUnderscore(username)

//User input:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter your Username: ", username => {

    console.log(`Output: ${CodelandUsernameValidation(username) ? "verdadero" : "falso"}`);

    readline.close();
});
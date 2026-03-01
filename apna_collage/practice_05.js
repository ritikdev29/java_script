// practice questions.. 
// create a function using "function" keyword that a string as an argument & return number of vowels in a string

function countVowel(str) {
    // for(const char of str) {
    // console.log(char);
    // countVowel("hello"); console using browser
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }
    // countVowel("Aieufnx"); for console cmd
    console.log(count);


}

    // question no 2 create an arrow function to perform the same task
    const countVow = (str) => {
        let count = 0;
        for (const char of str) {
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                count++;
            }
  

        }
        return count;

    };



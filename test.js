const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    rl.question("Please enter your age: ", (age) => {
        console.log(`Hello ${name}, you are ${age} years old`);
        rl.close();
    });
})

rl.on('close', () => {
    console.log("Interface closed");
    process.exit(0);
})

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(){
    let count = 10
    while (count >= 1) {
        if (count % 2 == 0){ 
            count --
        }
        else {
            console.log(count + " is odd") 
        count --;
        }
    }

}

printOdds ()

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(){
    let name = prompt("What is your name?");
    console.log(`Greetings ${name}`);
    let age = prompt("What is your age?");
    for (name; age; ;){
        if (name is >= 16){
            console.log(`Congratulations ${name}! You are old enough to drive.`);
        } else if(name < 16) {
            console.log(`Sorry ${name}, you are not old enough to drive.`);
        } else (age == NaN){
            console.log("Invalid input.")
        }   
    }
};

checkAge()

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


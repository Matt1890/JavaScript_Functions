console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1 While:\n==========\n");

function printOdds(count) {
  while (count >= 1) {
    if (count % 2 == 0) {
      count--;
    } else {
      console.log(count + " is odd");
      count--;
    }
  }
}

printOdds(10);

console.log("EXERCISE 1 For:\n==========\n");

function printOddsFor(startNum) {
  for (
    let startNum = parseInt(prompt("What should we count down from?"));
    startNum >= 1;
    startNum--
  ) {
    if (startNum % 2 == 1) {
      console.log(`${startNum} is odd.`);
    } else {
      continue;
    }
  }
}

printOddsFor();

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge() {
  let name = prompt("What is your name?");
  console.log(`Greetings ${name}`);
  let age = parseInt(prompt("What is your age?"));
  for (let i = 1; i >= 1; i--) {
    if (age >= 16) {
      console.log(`Congratulations ${name}! You are old enough to drive.`);
    } else if (age < 16) {
      console.log(`Sorry ${name}, you are not old enough to drive.`);
    }
  }
}

checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuad() {
  let x = prompt("Enter first coordinate.");
  let y = parseInt(prompt("Enter second coordinate."));
  for (let i = 1; i >= 1; i--) {
    if (x > 0 && y > 0) {
      console.log("Point is located in the 1st quadrant.");
    } else if (x < 0 && y < 0) {
      console.log("Point is located in the 3rd quadrant.");
    } else if (x > 0 && y < 0) {
      console.log("Point is located in the 4th quadrant.");
    } else if (x > 0 && y < 0) {
      console.log("Point is located in the 3rd quadrant.");
    } else if (x == 0) {
      console.log("Point is located on the x axis.");
    } else if (y == 0) {
      console.log("Point is located on the y axis.");
    }
  }
}

whichQuad();

console.log("EXERCISE 4:\n==========\n");

function whichTri() {
  let a = prompt("Enter first side length.");
  let b = parseInt(prompt("Enter second side length."));
  let c = parseInt(prompt("Enter third side length."));
  for (let i = 1; i >= 1; i--) {
    if (a + b < c || b + c < a || a + c < b) {
      console.log("This is not a triangle!");
      break;
    } else if (a == b && b == c && c == a) {
      console.log("Triangle is equilateral.");
    } else if ((a == b && b != c) || (a != b && b == c)) {
      console.log("Triangle is isoceles.");
    } else if (a != b && b != c && a != c) {
      console.log("Triangle is scalene.");
    }
  }
}

whichTri();

console.log("EXERCISE 5:\n==========\n");

function usageTracker() {
  let planLimit = prompt("What's your 30 day limit?.");

  let day = parseInt(prompt("What day of 30 is it?"));

  let usage = parseInt(prompt("How much data have you used so far?"));

  let average = planLimit / day;
  console.log(
    `Your average daily use should be around ${average} per day over each cycle.`
  );

  let daysRemaining = 30 - day;
  console.log(`You have ${daysRemaining} days remaining in your cycle.`);

  let dataLeft = planLimit - usage;
  console.log(`You have ${dataLeft} for the remainder of this cycle.`);

  let dailyUse = dataLeft / daysRemaining;
  console.log(`At the current rate, you may use up to ${dailyUse} per day.`);

  let currentAverage = usage / day;
  console.log(`You are currently using ${currentAverage} per day.`);

  for (let i = 1; i >= 1; i--) {
    if (currentAverage * daysRemaining + usage > planLimit) {
      console.log(
        `At the current rate, you will exceed your allowance by ${
          currentAverage * daysRemaining - dataLeft * -1
        }! Use no more than ${
          (planLimit - usage) / daysRemaining
        } to stay on track!`
      );
    } else if (currentAverage * dailyUse < planLimit / 30) {
      console.log(
        `You are under your limit and will loose ${
          dailyUse * daysRemaining - daysLeft * dailyUse
        }.`
      );
    }
  }
}

usageTracker();

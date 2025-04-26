<<<<<<< HEAD
//  --------------- QUESTIONS -------------
// Assignment: Plan a Weekly Workout Routine
// Objective:
// Create a JavaScript program that designs and analyzes a weekly workout schedule. You’ll use variables, arrays, objects, functions, loops, array methods, and conditionals to manage exercises, calculate effort, and provide insights.
// Requirements:
// 1.	Variables: Use let for dynamic values and const for fixed data.
// 2.	Data Types: Include strings (exercise names), numbers (durations), arrays (workout days), and objects (exercise details).
// 3.	Functions: Write at least two functions—one traditional, one arrow—to handle calculations or transformations.
// 4.	Loops: Use for and while for different tasks.
// 5.	Array Methods: Apply map, filter, and reduce to process the workout data.
// 6.	Conditional Statements: Use if-else and a ternary operator to categorise or adjust the plan.



// -------SOLUTIONS --------

// ----- Variables ------

const weeklySchedule = [ 
    {
        days: 'Monday',
        exercise: "Running",
        duration: 30,
        details: "To exercise and improve my stamina",
        weather_condition: 'rainy' // Weather condition for workout planning
    },
    {
        days: 'Tuesday',
        exercise: "Football",
        duration: 60,
        details: "To exercise and improve my stamina",
        weather_condition: 'sunny'
    },
    {
        days: 'Wednessday', // Typo: "Wednesday" should be corrected
        exercise: "Yoga",
        duration: 40,
        details: "Flexibility and recovery",
        weather_condition: 'cloudy'
    },
    {
        days: 'Thursday',
        exercise: "Cycling",
        duration: 50,
        details: "Cardio and fun",
        weather_condition: 'sunny'
    },
    {
        days: 'Friday',
        exercise: "Rest", // Rest day
        duration: 0,
        details: "Rest day",
        weather_condition: 'rainy'
    }
];

// ------- Loops ------

// For Loop - List all exercises for the week
for (let i = 0; i < weeklySchedule.length; i++) {
    console.log(`Day ${i + 1}: ${weeklySchedule[i].exercise}`);
}

// While Loop - Count how many days are "Rest"
let index = 0;
let restCount = 0;

while (index < weeklySchedule.length) {
  if (weeklySchedule[index].exercise.toLowerCase() === "rest") {
    restCount++; 
  }
  index++;
}

console.log("Total Rest Days:", restCount); 

// ----- Functions ------

// Function to determine effort level based on duration
function durationCondition(duration) {
  if (duration) {
    if (duration >= 50) {
      return "High"; 
    } else if (duration >= 30) {
      return "Moderate"; 
    } else if (duration > 0) {
      return "Low"; 
    } else {
      return "Rest"; 
    }
  }
}

// Map - Add effort level to each day's exercise
const scheduleDuration = weeklySchedule.map((day) => ({
    ...day,
    data: durationCondition(day.duration) 
}));

console.log(scheduleDuration);

// Filter - Get days with rainy weather
const rainyDays = weeklySchedule.filter((day) => day.weather_condition === 'rainy');
console.log("Exercises during rainy days:", rainyDays); 

// ----- Reduce Function ------

// Function to calculate total workout duration for the week
const getTotalDuration = () => {
    return weeklySchedule.reduce((total, day) => total + day.duration, 0); 
};

const totalDuration = getTotalDuration();

console.log('Total Duration:', totalDuration); 

// ----- Conditional Statements ------

// Check each day's weather and give feedback on activity suggestion
weeklySchedule.forEach((day) => {
  const activity = day.weather_condition === 'rainy'
    ? "Consider indoor workouts." 
    : "Great day to stay active"; 

  console.log(`${day.days}: ${activity}`); 
});
=======
// 1. Create an object called trip with the following properties: destination, duration, activities (an 
//     array of activities), and budget.
// 2. Create a function that takes two numbers as arguments and returns their product.
// 3. Create a function that takes a string as an argument and returns the string in uppercase.
//  4. Create a function that takes an array of numbers as an argument and returns the sum of all 
//  the numbers in the array.
//  5. Write a function that takes an object as an argument and returns the value of a specific property


// ---------- SOLUTION ONE -------
// Declared a variable called trip with properties of destination, duration, activities (array), and budget

const trip = {
    destination: "Port Harcourt, Rivers State",
    duration: "1 Hour 45 minutes",
    activities: ["Sightseeing", "Boat Ride", "Cultural Tour"],
    budget: 15000,
  };
  
  console.log("Trip object:", trip);
  
  // ---------- SOLUTION TWO -------
  // Function that takes two numbers and returns their product
  
  function sum(a, b) {
    const product = a * b;
    return {
      product,
    };
  }
  
  const productResult = sum(5, 10);
  console.log("Product Result:", productResult);
  
  // ---------- SOLUTION THREE -------
  // Function that takes a string and returns it in uppercase
  
  const word = (name) => {
    return name.toUpperCase();
  };
  
  const uppercaseResult = word("wisdom");
  console.log("Uppercase Result:", uppercaseResult);
  
  // ---------- SOLUTION FOUR -------
  // Function that takes an array of 4 numbers and returns their sum
  
  function arraySum([a, b, c, d]) {
    const product = a + b + c + d;
    return {
      product,
    };
  }
  
  const sumResult = arraySum([5, 10, 15, 20]);
  console.log("Sum Result:", sumResult);
  
  // ---------- SOLUTION FIVE -------
  // Function that returns the destination from a trip object
  
  const trips = (trip) => {
    const indexOne = trip.destination;
    return {
      indexOne,
    };
  };
  
  const destinationResult = trips(trip);
  console.log("Destination Result:", destinationResult);
  
>>>>>>> 06b510a2ebd733829634a0a3c1c9775a3c8bc416

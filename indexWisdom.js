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
  
// Define the functions you want to test

// Function that takes a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      // This is a named function
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      // This is an anonymous function
    };
  }
  
  // Export the functions if needed
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  
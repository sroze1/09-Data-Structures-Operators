function largestNumber(n) {
  // First we start of with the actual number 9, not the string.
  // If we try to add to 9, it'll just go up in the loop like - '9,18,27'.
  // So yeah we start with a number we want to add the '9' string to, not the actual digit 9.
  // The reason we define this outside of the if loop is you already know, because otherwise, we can't return the value outside of it
  // You'll learn about scopes later anyways so it'll make much deeper sense even though you already know
  let printNumber = 9;

  // We start off with the first condition, where if n is greater than or equal to 1, then the loop starts.
  // If it's not greater than 1, then we move straight to the minus 1 instance below.
  if (n >= 1) {
    // Whatever number the n is, we complete the loop that many times.
    // if n is 9, the loop will continue 9 times -- because the loop will only perform as long as i is less than n (i < n)
    for (let i = 1; i < n; i++) {
      // Now the 9 number we have, on each loop we want to add the '9' string to it.
      // Remember we can't add the actual  number 9 to it because this will actually make the addition and this isn't what we want g
      printNumber += '9';
    }
  }
  if (n < 1) return '-1';
  // This is self explanatory
  else return printNumber; // If n doesn't match the condition above this, (meaning it's greating than 1, this also means that the for loop above would have performed,
  // in which case we want the function to finally return the printNumber)
}

console.log(largestNumber(5));

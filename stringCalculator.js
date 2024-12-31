class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }

    const numArray = numbers.split(",");
    let sum = 0;

    for (let num of numArray) {
      const parsedNum = parseInt(num, 10);
      if (!isNaN(parsedNum)) {
        sum += parsedNum;
      }
    }

    return sum;
  }
}

const calculator = new StringCalculator();

// Test Cases:
console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,5,6,9,8,5")); // Output: 34
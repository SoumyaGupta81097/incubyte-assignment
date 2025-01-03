class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }

    let delimiter = ",";
    let negatives = [];

    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }

    numbers = numbers.replace(/\n/g, delimiter);

    // Split the string into an array of numbers using the delimiter
    const numArray = numbers.split(delimiter);
    let sum = 0;

    for (let num of numArray) {
      const parsedNum = parseInt(num, 10);
      if (!isNaN(parsedNum)) {
        if (parsedNum < 0) {
          negatives.push(parsedNum);
        } else {
          sum += parsedNum;
        }
      }
    }

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
  }
}

const calculator = new StringCalculator();

// Test Cases :

try {
  console.log(calculator.add("")); // Output: 0
  console.log(calculator.add("1")); // Output: 1
  console.log(calculator.add("1,5")); // Output: 6
  console.log(calculator.add("1\n2,3,6\n")); // Output: 12
  console.log(calculator.add("//;\n1;2")); // Output: 3
  console.log(calculator.add("-1,-5,8")); // Throws Error
} catch (error) {
  console.error(error.message);
}

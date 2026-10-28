// Assignment 1 Student Marks Analyzer

// Task 1: Student Details
let studentName = "Rahul kumar";
let rollNo = 101;
let department = "Computer Science";

// Task 2: Store Marks in Array
let marks = [78, 62, 85, 91, 34];

// Task 3: Calculate Total Marks

function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

// Task 4: Calculate Percentage
function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    let percentage = (total / 500) * 100;

    return percentage;
}

// Task 5: Find Highest Marks
function findHighest(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// Task 6: Find Lowest Marks
function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// Task 7: Count Passed Subjects
function countPassed(marks) {
    let passed = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            passed = passed + 1;
        }
    }

    return passed;
}

// Task 8: Uppercase Name and Length
let upperName = studentName.toUpperCase();
let nameLength = studentName.length;

// Bonus Challenge: Performance
function getPerformance(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    }
    else if (percentage >= 60) {
        return "Good";
    }
    else if (percentage >= 40) {
        return "Average";
    }
    else {
        return "Needs Improvement";
    }
}

// Task 9: Display Final Report
console.log("===== STUDENT MARKS REPORT =====");

console.log("StudentName: " + upperName);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("studentName Length: " + nameLength);

console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");

console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));

console.log("Subjects Passed: " + countPassed(marks));

console.log("Performance: " + getPerformance(marks));

console.log("================================");
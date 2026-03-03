const users = [
{ name: "Alice", courses: ["Math", "Science", "English"] },
{ name: "Bob", courses: ["Math", "Art"] },
{ name: "Charlie", courses: ["Science", "Math", "History"] },
{ name: "David", courses: ["Math", "English"] },
{ name: "Eve", courses: ["Art", "Science"] }
];

let courseCount = {};

// Count students in each course using for loops
for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].courses.length; j++) {
        let course = users[i].courses[j];
        
        if (courseCount[course]) {
            courseCount[course]++;
        } else {
            courseCount[course] = 1;
        }
    }
}

// Display course counts
for (let course in courseCount) {
    console.log(course + ": " + courseCount[course] + " students");
}

// Find most popular course
let maxCourse = "";
let maxCount = 0;

for (let course in courseCount) {
    if (courseCount[course] > maxCount) {
        maxCount = courseCount[course];
        maxCourse = course;
    }
}

console.log("Most popular course:", maxCourse, "with", maxCount, "students");
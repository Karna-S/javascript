
let students = [
    { name: 'students', marks: 45 },
    { name: 'Jane', marks: 85 },
    { name: 'Bob', marks: 55 },
    { name: 'Alice', marks: 30 }
];

// Filter out students with marks above 50
let passedStudents = students.filter(student => student.marks > 50);

console.log("Students who passed:");
passedStudents.forEach(student => console.log(student.name));
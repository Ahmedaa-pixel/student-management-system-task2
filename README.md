# student-management-system-task2
// =====================================
// Student Management & Analysis System
// =====================================

// 1. Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average using reduce
    calculateAverage() {
        const total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= 60) return "D";
        else if (average >= 50) return "E";
        else return "F";
    }

    // Final Result
    getResult() {
        const average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 2. Students List
const studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 95),
    new Student(102, "Mohamed", [45, 40, 48], 80),
    new Student(103, "Ali", [70, 75, 80], 90),
    new Student(104, "Omar", [42, 46, 45], 85)
];

// 3. Compassion Committee (Filter)
const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

// 4. Add 5 Compassion Marks (Map)
const updatedStudents = strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// 5. Calculate Total using Reduce
const totalNewAverages = updatedStudents.reduce(
    (sum, student) => sum + student.newAverage, 0
);

// 6. Calculate Compassion Average
const compassionAverage = updatedStudents.length > 0
    ? totalNewAverages / updatedStudents.length
    : 0;

// =====================================
// 7. Console Output
// =====================================

console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    console.log("-------------------------");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getResult());
});

console.log("==========================");
console.log("STRUGGLING STUDENTS");
console.table(updatedStudents);

console.log(
    "Compassion Average:",
    compassionAverage
);

console.log("==========================");

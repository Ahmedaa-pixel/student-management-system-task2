// =============================================
// Student Management & Analysis System
// =============================================

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

    // Get Letter Grade
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        if (average >= 80) return "B";
        if (average >= 70) return "C";
        if (average >= 60) return "D";
        if (average >= 50) return "E";
        return "F";
    }

    // Check Pass or Fail
    getResult() {
        return this.calculateAverage() >= 50 &&
            this.attendance >= 75 ? "Pass" : "Fail";
    }
}

// 2. Create Students
const students = [
    new Student(1, "Ahmed", [85, 90, 80], 95),
    new Student(2, "Mohamed", [45, 48, 42], 80),
    new Student(3, "Ali", [70, 65, 75], 70),
    new Student(4, "Omar", [55, 60, 50], 85)
];

// 3. Display Students
console.log("===== Student Management System =====");

students.forEach(student => {
    console.log({
        ID: student.id,
        Name: student.name,
        Grades: student.grades,
        Average: student.calculateAverage().toFixed(2),
        Grade: student.getGrade(),
        Result: student.getResult()
    });
});

// 4. Calculate Class Average using reduce
const classAverage = students.reduce(
    (sum, student) => sum + student.calculateAverage(), 0
) / students.length;

console.log("Class Average:", classAverage.toFixed(2));

// 5. Filter Students Who Need Help
const studentsNeedHelp = students.filter(
    student => student.calculateAverage() < 50
);

console.log("Students Who Need Help:", studentsNeedHelp);

// 6. Add 5 Bonus Points using map
const updatedStudents = students.map(student => {
    return new Student(
        student.id,
        student.name,
        student.grades.map(grade => Math.min(grade + 5, 100)),
        student.attendance
    );
});

console.log("Students After Adding Bonus Points:", updatedStudents);

// 7. Final Average After Bonus
const finalAverage = updatedStudents.reduce(
    (sum, student) => sum + student.calculateAverage(), 0
) / updatedStudents.length;

console.log("Final Class Average:", finalAverage.toFixed(2));// =============================================
// Student Management & Analysis System
// =============================================

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

    // Get Letter Grade
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        if (average >= 80) return "B";
        if (average >= 70) return "C";
        if (average >= 60) return "D";
        if (average >= 50) return "E";
        return "F";
    }

    // Check Pass or Fail
    getResult() {
        return this.calculateAverage() >= 50 &&
            this.attendance >= 75 ? "Pass" : "Fail";
    }
}

// 2. Create Students
const students = [
    new Student(1, "Ahmed", [85, 90, 80], 95),
    new Student(2, "Mohamed", [45, 48, 42], 80),
    new Student(3, "Ali", [70, 65, 75], 70),
    new Student(4, "Omar", [55, 60, 50], 85)
];

// 3. Display Students
console.log("===== Student Management System =====");

students.forEach(student => {
    console.log({
        ID: student.id,
        Name: student.name,
        Grades: student.grades,
        Average: student.calculateAverage().toFixed(2),
        Grade: student.getGrade(),
        Result: student.getResult()
    });
});

// 4. Calculate Class Average using reduce
const classAverage = students.reduce(
    (sum, student) => sum + student.calculateAverage(), 0
) / students.length;

console.log("Class Average:", classAverage.toFixed(2));

// 5. Filter Students Who Need Help
const studentsNeedHelp = students.filter(
    student => student.calculateAverage() < 50
);

console.log("Students Who Need Help:", studentsNeedHelp);

// 6. Add 5 Bonus Points using map
const updatedStudents = students.map(student => {
    return new Student(
        student.id,
        student.name,
        student.grades.map(grade => Math.min(grade + 5, 100)),
        student.attendance
    );
});

console.log("Students After Adding Bonus Points:", updatedStudents);

// 7. Final Average After Bonus
const finalAverage = updatedStudents.reduce(
    (sum, student) => sum + student.calculateAverage(), 0
) / updatedStudents.length;

console.log("Final Class Average:", finalAverage.toFixed(2));

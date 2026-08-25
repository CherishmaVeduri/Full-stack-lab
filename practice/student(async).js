const fs = require("fs");
fs.writeFile("student.txt", "Name: Rahul\nBranch: CSE\nMarks: 85", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("Student data written successfully");
    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error:", err);
            return;
        }

        console.log("\nStudent Details:");
        console.log(data);
        fs.appendFile("student.txt", "\nGrade: A", (err) => {
            if (err) {
                console.log("Error:", err);
                return;
            }
            console.log("\nGrade added successfully");
        });
    });
});
const fs= require("fs");
try{
    fs.writeFileSync("employee.txt","ID:101\nName:Ravi\nDepartment:IT\nSalary:25000");
    console.log("Employee data created successfully");
    let data=fs.readFileSync("employee.txt","utf8");
    console.log("\nEmployee details:");
    console.log(data);
    fs.appendFileSync("employee.txt","\nExperience:3 Years");
    console.log("\nExperience added successfully");
    data=fs.readFileSync("employee.txt","utf8");
    console.log("\nUpdated Employee Details:");
        console.log(data);

}catch(error){
    console.log("Error:",error);
    
}
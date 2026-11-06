import { getStudents, saveStudents }
from "./storage.js";

let students = getStudents();

let params = new URLSearchParams(window.location.search);

let editIndex = params.get("index");

console.log(editIndex);

const form = document.getElementById("studentForm");

if (editIndex !== null) {

    let studentEdit = students[Number(editIndex)];

    if (studentEdit) {

       document.getElementById("submitbutton").innerText =
    "Update Student";

    document.getElementById("student-name").value =
        studentEdit.name;

    document.getElementById("email").value =
        studentEdit.email;

    document.getElementById("roll").value =
        studentEdit.rollNumber;

    document.querySelector(
        `input[name="gender"][value="${studentEdit.gender}"]`
    ).checked = true;

    document.getElementById("course").value =
        studentEdit.course;

    document.getElementById("address").value =
        studentEdit.address;
    }
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!selectedGender) {
        alert("Please select gender");
        return;
    }
    const studentName = document.getElementById("student-name").value;
    const studentEmail = document.getElementById("email").value;
    const studentRoll = document.getElementById("roll").value;
    const studentGender = document.querySelector('input[name="gender"]:checked').value;
    const studentCourse = document.getElementById("course").value;
    const studentAddress = document.getElementById("address").value;

    const studentData = {
        name: studentName,
        email: studentEmail,
        rollNumber: studentRoll,
        gender: studentGender,
        course: studentCourse,
        address: studentAddress
    };
    

     if (editIndex === null) {

        students.push(studentData);
        alert("Student Added Successfully!");

    } else {

        let index = Number(editIndex);

        if (!students[index]) {
            alert("Student record not found!");
            return;
        }

        students[index] = studentData;
        alert("Student Updated Successfully!");
        window.location.href = "view-student.html";
    }


    saveStudents(students);
    
    form.reset();
    

});



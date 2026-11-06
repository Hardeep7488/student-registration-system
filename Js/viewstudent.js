import { getStudents, saveStudents }
from "./storage.js";

const storedData = localStorage.getItem('students');
    const students = storedData ? JSON.parse(storedData) : [];

  
    function displayStudents() {
    let list = document.getElementById("studentTable");
    list.innerHTML = "";

    students.forEach(function(student, index) {

        list.innerHTML += `
            <tr>
            <td>${index+1}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.rollNumber}</td>
            <td>${student.gender}</td>
            <td>${student.course}</td>
            <td>${student.address}</td>
            <td>
                <button class="deleteBtn" data-index="${index}">
                    Delete
                </button>
                <button class="editBtn" data-index="${index}">
                    Edit
                </button>
                
            </td>
           
            </tr>
        `;

    });
}

let studentList = document.getElementById("studentTable");

studentList.addEventListener("click", function(event) {

    let index = Number(event.target.dataset.index);

    if (event.target.classList.contains("editBtn")) {

        editStudent(index);

    }

    if (event.target.classList.contains("deleteBtn")) {

        deleteStudent(index);

    }

});

function deleteStudent(index) {

    students.splice(index, 1);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents();
}
let editIndex = -1;

function editStudent(index){
    editIndex=index;
    
    window.location.href =
        `Register.html?index=${index}`;

}

window.onload = displayStudents();

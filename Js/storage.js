export function getStudents() {

    return JSON.parse(
        localStorage.getItem("students")
    ) || [];

}

export function saveStudents(students) {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}
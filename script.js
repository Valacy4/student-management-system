let students = [];
let form = document.getElementById("form");
let error = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    error.innerText = "";
    if (!name || !email || !age || !course) {
        error.innerText = "Please Enter all the details";
        return;
    }
    if (age < 18) {
        error.innerText = "Age Should be greater than 18";
        return;
    }
    let student = {
        name: name,
        email: email,
        age: age,
        course: course
    };
    students.push(student);
    displayStudents();

});

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML=`
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Course</th>
    <tr>
    `;
    students.forEach(function (student) {
        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
        </tr>`
    })

}
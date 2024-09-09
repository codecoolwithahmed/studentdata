let addStudent = document.getElementById('add-student')
let studentName = document .getElementById('student-name')
let studentEmail = document .getElementById('student-email')
let courses = document.getElementById('courses')
let addData = document.getElementById('add-data')

let studentDataInArray = []
let studentData = {}
let sNo = 0
let rollNumber = Math.random()

if (studentName && studentEmail && courses) {
    addData.addEventListener('click' , () =>{
        studentData.sno = sNo++

    })
}

const characters = 'AQWERTYUIOPLKJHGFDSAZXCVBNM1234567890';
let randomString = '';

for (let i = 0; i < 5; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log(randomString);

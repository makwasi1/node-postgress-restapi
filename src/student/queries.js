const getStudents = "SELECT * FROM student;";
const getStudentById = "SELECT * FROM student WHERE id = $1";
const checkEmailExists = "SELECT * FROM student WHERE email = $1";
const createStudent = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    createStudent
}
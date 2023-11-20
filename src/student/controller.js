const db = require("../database");
const queries = require("./queries");

const getStudents = (req, res) => {
  db.Students.findAll()
    .then((results) => {
      res.status(200).json(results[0]);
    })
    .catch((error) => {
      throw error;
    });
};

const getStudentById = (req, res) => {
  db.Students.findByPk(req.params.id)
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
};

const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  // db.sequelize.query(queries.checkEmailExists, [email], (error, results) => {
  //   if (results.rows.length) {
  //     res.send("Email already exists");
  //   }
  //create the student
  db.Students.create({
    name: name,
    email: email,
    age: age,
    dob: dob,
  })
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
};

const updateStudent = (req, res) => {
  db.Students.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    id: req.body.id,
  })
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
};

const deleteStudent = (req, res) => {
  db.Students.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};

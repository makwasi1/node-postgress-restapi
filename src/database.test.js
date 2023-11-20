const db = require("./database");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

test("create student", async () => {
  expect.assertions(1);
  const student = {
    id: 1,
    name: "John Doe",
    email: "jJ5vM@example.com",
    age: 25,
    dob: "1990-01-01",
  };
  const studentCreated = await db.Students.create(student);
  expect(studentCreated.id).toEqual(1);
});

test("get student", async () => {
 expect.assertions(2);
 const student =await db.Students.findByPk(1)
 expect(student.name).toEqual("John Doe");
 expect(student.email).toEqual("jJ5vM@example.com");
})

test("delete student", async () => {
    expect.assertions(1);
    await db.Students.destroy({where: {id: 1}});
    const student = await db.Students.findByPk(1);
    expect(student).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
})

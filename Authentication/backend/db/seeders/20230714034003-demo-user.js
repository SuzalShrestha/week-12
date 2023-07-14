"use strict";
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        username: "Demo-lition",
        email: "demo@user.io",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        username: "FakeUser1",
        email: "fakeuser1@example.com",
        hashedPassword: bcrypt.hashSync("password1"),
      },
      {
        username: "FakeUser2",
        email: "fakeuser2@example.com",
        hashedPassword: bcrypt.hashSync("password2"),
      },
      {
        username: "FakeUser3",
        email: "fakeuser3@example.com",
        hashedPassword: bcrypt.hashSync("password3"),
      },
      {
        username: "FakeUser4",
        email: "fakeuser4@example.com",
        hashedPassword: bcrypt.hashSync("password4"),
      },
      {
        username: "FakeUser5",
        email: "fakeuser5@example.com",
        hashedPassword: bcrypt.hashSync("password5"),
      },
      {
        username: "FakeUser6",
        email: "fakeuser6@example.com",
        hashedPassword: bcrypt.hashSync("password6"),
      },
      {
        username: "FakeUser7",
        email: "fakeuser7@example.com",
        hashedPassword: bcrypt.hashSync("password7"),
      },
      {
        username: "FakeUser8",
        email: "fakeuser8@example.com",
        hashedPassword: bcrypt.hashSync("password8"),
      },
      {
        username: "FakeUser9",
        email: "fakeuser9@example.com",
        hashedPassword: bcrypt.hashSync("password9"),
      },
      {
        username: "FakeUser10",
        email: "fakeuser10@example.com",
        hashedPassword: bcrypt.hashSync("password10"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Demo-lition",
            "FakeUser1",
            "FakeUser2",
            "FakeUser3",
            "FakeUser4",
            "FakeUser5",
            "FakeUser6",
            "FakeUser7",
            "FakeUser8",
            "FakeUser9",
            "FakeUser10",
          ],
        },
      },
      {}
    );
  },
};

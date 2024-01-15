"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    for (let i = 0; i < 30; i++) {
      await strapi.entityService.create("api::person.person", {
        data: {
          name: faker.person.fullName(),
          bio: faker.person.bio(),
          birthday: faker.date.past(),
          age: faker.number.int({ min: 0, max: 100 }),
          // nationality: faker.location.country(),
        },
      });
    }
  },
};

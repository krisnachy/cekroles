const { nanoid } = require('nanoid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      {
        id: nanoid(), name: 'Admin', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Organizer', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'User', createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};

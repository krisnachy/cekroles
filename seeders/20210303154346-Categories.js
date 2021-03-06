const { nanoid } = require('nanoid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        id: nanoid(), name: 'Charity & Causes', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Entertainment', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Fashion', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Finance & Business', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Hobbies', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        id: nanoid(), name: 'Psychology', createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

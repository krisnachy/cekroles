const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const { Roles } = require('../models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: nanoid(),
        first_name: 'Brad',
        last_name: 'Pitt',
        email: 'bradpitt@gmail.com',
        password: await bcrypt.hash('password', 5),
        phone: '082111111111',
        company_organization: 'BCA',
        address: 'Jl. Jend. Sudirman No.49-51, Yogyakarta',
        profile_picture: '',
        roles_id: await Roles.findOne({
          where: {
            name: 'Admin',
          },
        }).then((role) => role.id),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(),
        first_name: 'Johnny',
        last_name: 'Depp',
        email: 'johnnydepp@gmail.com',
        password: await bcrypt.hash('password', 5),
        phone: '082122222222',
        company_organization: 'BNI',
        address: 'Jl. Trikora No.1, Yogyakarta',
        profile_picture: '',
        roles_id: await Roles.findOne({
          where: {
            name: 'Organizer',
          },
        }).then((role) => role.id),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(),
        first_name: 'Tom',
        last_name: 'Cruise',
        email: 'tomcruise@gmail.com',
        password: await bcrypt.hash('password', 5),
        phone: '082133333333',
        company_organization: 'BRI',
        address: 'Jl. Cik Di Tiro No.3, Yogyakarta',
        profile_picture: '',
        roles_id: await Roles.findOne({
          where: {
            name: 'User',
          },
        }).then((role) => role.id),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

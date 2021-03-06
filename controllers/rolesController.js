const { Roles } = require('../models');
const BaseController = require('./baseController');

class RolesController extends BaseController {
  constructor() {
    super(Roles);
  }
}

module.exports = RolesController;

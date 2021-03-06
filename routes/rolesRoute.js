const express = require('express');
const { body, param, validationResult } = require('express-validator');
const RolesController = require('../controllers/rolesController');

const roles = new RolesController();
const app = express.Router();

// List all roles.
app.get('/', async (req, res) => {
  const result = await roles.get();
  res.status(200).json({
    status: 200,
    message: 'Success.',
    data: result,
  });
});

// Create new role.
app.post(
  '/',
  [
    body('name')
      .notEmpty()
      .withMessage('The role name cannot be empty.')
      .isString()
      .withMessage('The role name must be string.')
      .custom(async (name) => {
        const existingName = await roles.get({
          name,
        });
        if (existingName.length) {
          throw new Error('The role name already exists.');
        }
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        res.status(400).json({
          status: 400,
          message: error.msg,
        });
      });
    } else {
      const result = await roles.add(req.body);
      res.status(201).json({
        status: 201,
        message: 'Role created successfully.',
        data: result,
      });
    }
  },
);

// Update role name.
app.put(
  '/:id',
  [
    param('id')
      .custom(async (id) => {
        const existingID = await roles.get({
          id,
        });
        if (!existingID.length) {
          throw new Error('Role not found.');
        }
      }),
    body('name')
      .notEmpty()
      .withMessage('The role name cannot be empty.')
      .isString()
      .withMessage('The role name must be string.')
      .custom(async (name) => {
        const existingName = await roles.get({
          name,
        });
        if (existingName.length) {
          throw new Error('The role name already exists.');
        }
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        res.status(400).json({
          status: 400,
          message: error.msg,
        });
      });
    } else {
      await roles.edit(req.params.id, req.body);
      res.status(200).json({
        status: 200,
        message: 'Role name updated successfully.',
      });
    }
  },
);

// Delete a role.
app.delete(
  '/:id',
  [
    param('id')
      .custom(async (id) => {
        const existingID = await roles.get({
          id,
        });
        if (!existingID.length) {
          throw new Error('Role not found.');
        }
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        res.status(400).json({
          status: 400,
          message: error.msg,
        });
      });
    } else {
      await roles.remove(req.params.id);
      res.status(200).json({
        status: 200,
        message: 'Role deleted successfully.',
      });
    }
  },
);

module.exports = app;

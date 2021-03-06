const express = require("express");
const { body, param, validationResult } = require("express-validator");
const UsersController = require("../controllers/usersController");

//Inisiasi controller
const user = new UsersController();
const app = express.Router();

app.get('/', async (req, res) => {
  const result = await user.get();
  res.status(200).json({
    status: 200,
    message: 'Success.',
    data: result,
  });
});

// app.post(
//   "/",
//   // [
//   //   body("email")
//   //     .isEmail()
//   //     .withMessage("Must be a valid email"),
//   //   body("confirm").custom(async (confirm, { req }) => {
//   //     const password = req.body.password;

//   //     if (password !== confirm) {
//   //       throw new Error(`Password not match`);
//   //     }
//   //   }),
//   // ],
//   async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       errors.array().forEach((error) => {
//         res.status(400).json({
//           status: 400,
//           message: error.msg,
//         });
//       });
//     } else {
//       const result = await user.add(req.body).catch(next)
//       res.status(201).json({
//         status: "Success",
//         message: "Sign up success",
//         data: result,
//       });
//     }
//     //const { email, password, confirm } = req.body;
//   }
// );

app.post('/', async (req, res, next) => {
  const result = await user.add(req.body).catch(next)
  res.status(201).json({
    status: "Success",
    message: "Sign up success",
    data: result
  })
})


module.exports = app;

require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use('/', require('./routes/indexRoute'));
app.use('/roles', require('./routes/rolesRoute'));
app.use('/register', require('./routes/usersRoute'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

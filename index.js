const express = require('express');
const { resolve } = require('path');
const userRouter = require('./Router');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.use('/create-user',userRouter);
app.use('login',userRouter);
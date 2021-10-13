const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error handlers
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
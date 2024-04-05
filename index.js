const app = require('./app');
const DB = require('./api/configs/db');

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server listening on port http://localhost:${PORT}`);
});
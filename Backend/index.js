import express from 'express';
import cors from 'cors';
const app = express();
import dbConnection from "./database/db.js"

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Employee Management API is running!');
});
dbConnection ()
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT not in env
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
import express from 'express';
import itemRoutes from './routes/itemRoutes.mjs';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
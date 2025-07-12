import express from 'express';
import { searchHandler } from './controller/searchController';

const app = express();
const PORT = 3000;

app.get('/search', searchHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

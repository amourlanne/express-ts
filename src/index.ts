import 'dotenv/config';
import app from './server';

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});

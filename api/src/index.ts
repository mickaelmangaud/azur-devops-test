import express, { Request, Response, Application } from 'express';

const PORT: number | string = process.env.PORT || 5000;
const app: Application = express();

app.get('*', async (req: Request, res: Response) => {
  res.json({ message: `it works!!` });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

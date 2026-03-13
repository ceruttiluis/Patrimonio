import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import patrimonioRoutes from './routes/patrimonio.routes';
import departamentoRoutes from './routes/departamento.routes';
import filialRoutes from './routes/filial.routes'
import transferenciaRoutes from './routes/transferencia.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/patrimonios', patrimonioRoutes);
app.use(departamentoRoutes);
app.use(filialRoutes);
app.use('/transferencias', transferenciaRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` API rodando em http://localhost:${port}`);
});
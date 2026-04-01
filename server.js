require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const inscricoesRoutes = require('./src/routes/inscricoes.routes');

app.use('/inscricoes', inscricoesRoutes);


const eventosRoutes = require('./src/routes/eventos.routes');

app.use('/eventos', eventosRoutes);


const usuariosRoutes = require('./src/routes/usuarios.routes');

app.use('/usuarios', usuariosRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

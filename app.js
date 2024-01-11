const express = require('express');
const app = express();
app.use(express.json());

//Importamos el Router de Libos
const LibrosRouter = require('./routes/libros.js');

//Importamos el Middleware Error Handler
//const errorHandler = require('./middleware/errorHandler');

app.use('/libros', LibrosRouter);

//app.use(errorHandler);

app.listen(3000, () => {
    console.log('servidor iniciado en el puerto 3000');
});

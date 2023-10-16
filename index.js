const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

//middleware (Son funciones que se ejecutan antes de llegar a los end point)

app.use(express.json());

//end points 

const tareas = require('./ruta/ingreso');
app.use('/api/list', tareas );


app.listen( port, ()=>{

    console.log(`Servidor en el puerto ${port}`);

});
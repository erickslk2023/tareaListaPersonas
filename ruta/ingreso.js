const express = require('express');
const app = express();
const db = require ('../database/conn');

app.get('',  async (req, res)=>{

    let sql = `select * from table_lista order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const { nombre, apellido } = req.body;
    const params =   [ nombre , apellido];
    let sql = `insert into table_lista (nombre , apellido) values ($1, $2)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const { nombre, apellido } = req.body;
    const id = req.params.id;
    const params =   [ id, nombre , apellido];
    let sql = ` update table_lista 
                    set nombre = $2, 
                    apellido = $3
                    
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})




app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from table_lista 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;
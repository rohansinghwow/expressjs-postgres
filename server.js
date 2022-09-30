const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json());

//routes



app.get('/rent', async (req, res) => {
    try {
        const allRent = await pool.query('SELECT * FROM rent')
        res.json(allRent.rows)
    }
    catch (error) {
        console.log(error)
    }
})



app.get('/search', async (req, res) => {
    const SEARCH_OBJ = {
        equal: '=',
        greater: '>',
        less: '<',

    }
    try {
        const { column, filterBy, filterSearch } = req.query;
        const rent = await pool.query(`SELECT * FROM rent WHERE ${column} ${SEARCH_OBJ[filterBy]} $1`, [filterSearch]);
        res.json(rent.rows)


    } catch (error) {
        console.log(error)
    }
})


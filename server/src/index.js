import express from 'express'
import bodyParser from 'body-parser'
import router from './api/server.js'
import morgan from 'morgan'

const app = express()

const servers = [];

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/', router)

app.listen(3999, () => console.log('API for mockserver-ui listening on port 3999!'))

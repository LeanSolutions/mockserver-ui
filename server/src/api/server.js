import express from 'express'
import all from '../handlers/server/all'
import create from '../handlers/server/create'

const router = express.Router()


router.get('/server', all)
//routes.post('/server/create', create)

export default router
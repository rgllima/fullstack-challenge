import environment from './config/environment'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Sao_Paulo')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(environment.appPort)
console.log(`[SERVER] Started ${environment.nodeEnv} in port ${environment.appPort}`)

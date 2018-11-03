// Modules import
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'

// Server
let server = null

function start(callback){
	const app = express()

	app.use(morgan('dev'))
	app.use(helmet())
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: false}))

	app.use((err, req, res, next) => {
		callback(new Error(`Something wen wrong! err: ${err}`), null)
		res.status(500).send('Something wen wrong!')
	})

	server = app.listen(parseInt(process.env.PORT), () => callback(null, server))
}

function stop(){
	if(server) server.close()

	return true
}

module.exports = { start, stop }
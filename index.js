// Modules import
import dotenv from 'dotenv-safe'

// Modules import project
import server from './server'

// Modules load
dotenv.load()

// Init
server.start((err, app) => {
	console.log('started')
})	
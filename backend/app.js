import express from 'express'

import cors from 'cors'

import router from './routes/mainRouter.js'

const app = express()

app.use(cors({
	origin: ['http://localhost:3000']
}));


app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use("/api", router)


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})


// app.listen(PORT, () => {
// 	console.log(`server has been started on ${PORT} port...`)
// })
export default app

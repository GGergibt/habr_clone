import express from 'express'



import router from './routes/servers.js'


const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use("/api", router)


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})


app.listen(PORT, () => {
	console.log(`server has been started on ${PORT} port...`)
})
export default app

import app from './app.js';

const PORT = process.env.PORT ?? 8000

app.listen(PORT, () => {
	console.log(`server has been started on ${PORT} port...`)
})

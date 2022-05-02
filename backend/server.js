import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middelware/errorMiddelware.js';
const app = express()

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('api is running')
})

app.use('/api/products', productRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} noode on port ${PORT}`.yellow
      .bold
  )
)

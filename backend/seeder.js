import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModal.js'
import Product from './models/productModal.js'
import Order from './models/orderModal.js'
import colors from 'colors';

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product)=> {
        return {...product, user: adminUser}

    })
    await Product.insertMany(sampleProducts);
    console.log('Data imported'.green.inverse);
    //process.exsit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}
const destroyData = async () => {
    try {
      await User.deleteMany()
      await Product.deleteMany()
      await Order.deleteMany()  
      console.log('Data destroyed'.red.inverse);
     // process.exsit();
      }
    
    catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  }

  if(process.argv[2] === '-d') {
      destroyData()
  } else {
      importData()
  }
  
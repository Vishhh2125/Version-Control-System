import app from "./app.js";
import connectDB from './src/db/index.js';


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  });
})
.catch((err)=>
{
  console.error(`Error connecting to the database: ${err}`);
})
import mongoose from "mongoose";
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
  
    if(isConnected) {
      console.log('MongoDB is already connected');
      return;
    }
  
    try {
      await mongoose.connect("mongodb+srv://lama:lama123@cluster0.qywof3w.mongodb.net/?retryWrites=true&w=majority", {
        dbName: "BLOG-MANIA",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  
      isConnected = true;
  
      console.log('MongoDB connected')
    } catch (error) {
      console.log(error);
    }
  }
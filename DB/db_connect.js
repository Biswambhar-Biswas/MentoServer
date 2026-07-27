import mongoose from "mongoose"

const DatabaseConnect = async ()=>{
    try{
        const mongoConnect = await mongoose.connect("mongodb+srv://bony9564:Bony9564@cluster0.7gl0em.mongodb.net/CollegeApp")
        console.log("Connection sucess",mongoConnect.connect.host);
        
    }
    catch{(err)=>{console.log(err);
        process.exit(1)
    }}
}

export  {DatabaseConnect}
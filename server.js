const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config(); // we configed the dotenv
connectDB(); // connect the app with mongo db 

const app = express();
app.use(express.json()); //miidle ware 



// Routes
const personRoutes = require("./routes/personRoutes");
app.use("/api/person", personRoutes);// go to  personRoutes

app.get("/", (req, res) => {
  res.send("Hotel Backend API Running");
});

//error handeler 
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` server running on port ${PORT}`));

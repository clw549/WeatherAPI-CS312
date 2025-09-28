import express from "express";
import bodyParser from "body-parser";

const API_KEY = "4725cb5d3e50ab1617203ccabb80fe4d";

const API_CALL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
const PORT = 3000;



const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extemded:true}));

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
});

app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.post("/", (req,res)=>{
    console.log(req.body);    
})

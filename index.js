import express from "express";
import bodyParser from "body-parser";

const API_KEY = "4725cb5d3e50ab1617203ccabb80fe4d";

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

app.post("/", async (req,res)=>{
    try {
        var {lat, lon} = req.body
        const API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const response = await fetch(API_CALL);
        if(!response.ok) {
            console.log(response);
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        res.render("weather.ejs", {weatherRes:result})
    } catch(err) {
        console.error(err);
    }
})

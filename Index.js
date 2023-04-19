let express = require('express');
let cors = require('cors');

let app = express();

let port = 10005;

app.use(cors());          //allow connections from anywhere
app.use(express.json());  //create req.body with JSON structure

let records= [];
//database to add, delete, and change student information


		
app.use('/', (req,res,next) =>{
    console.log("*******************");
    console.log("request came in for:",req.method,req.path);
    console.log("body is:",req.body);
    console.log("query is:",req.query);
    next();
});

app.use(express.static('public')); //share all files in public directory

app.get('/',async (req,res) => {
   let data=await cursor.toArray();
   res.render('SymptomTable',{SymptomTable: data});
});


app.post('/',async (req,res) => {
    records.push(req.body);
    res.sendStatus(200);
   
});
    
app.delete('/',async (req,res) => {
    records.remove();
    res.sendStatus(200);
});


app.patch('/',async (req,res) => {
       let update = {
        $set: {
            occurance:req.body.occurance,
            tinnitus: req.body.tinnitus,
            duration1: req.body.duration1,
            vertigo: req.body.vertigo,
            duration2: req.body.duration2,
            pressure: req.body.pressure,
            duration3:req.body.duration3,
            deafness: req.body.deafness,
            duration4: req.body.deafness,
            migriane: req.body.migriane,
            duration5: req.body.duration5

        }
        
       }
       res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

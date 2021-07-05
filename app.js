const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.urlencoded({
    extended:true,
}))

mongoose.connect("mongodb://localhost:27017/secondInterview" , {useNewUrlParser: true})
const secondSceduleSchema = {
    date: {
        type: Date,
        
    },
    location : String,
    interviewConductedBy: String,
}
const SecondInterview = mongoose.model('SecondInterview' , secondSceduleSchema);

app.post("/secondInterview" , function (req, res) {
    console.log("date is " + req.body.date)
    console.log("location is " +req.body.location);
    console.log("interview conducted by " + req.body.interviewConducted)
   const secondInterview = new SecondInterview({
    date: req.body.date,
    location: req.body.location,
    interviewConductedBy: req.body.interviewConducted
   });
   secondInterview.save();
})

app.get("/secondInterview" , function (req, res) {
    Interview.find(function (err, result) {
        if(!err){
            res.send(result);
        }else{
            res.send(err)
        }
    
})})

app.listen(3000 , function(){
    console.log('listening on port 3000')
})
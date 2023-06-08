if(process.env.NODE_ENV = 'production'){
require('dotenv').load()
}

const express = require('express')
const app = express()
const port = PORT || 4000
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY 
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const fs =require('fs')


app.set('view Engine','ejs')
app.use(exress.static('public'))

//route for the store page
app.get('/store',(req,res)=>{
    fs.readFile('items.json',(err,data)=>{
        if(err){
            res.sendStatus(500).end
        }
       // console.log(data.toString())
       else{
        res.render('store.ejs',{
            items: JSON.parse(data)
        })
       }
    })

})
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
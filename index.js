const app = require('./app')




const port = process.env.PORT || 70001
app.listen(port,()=>{
    console.log(`Server is runing at http://localhost:${port}`)
})
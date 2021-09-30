const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const routes  = require('./routes/pages')

if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging"){
    app.use(express.static('public'));
    app.use(routes)
}


app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})
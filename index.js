const express = require('express')

const app = express();

app.get('/',(request, response)=>{
  return response.json({message: 'Server is up'})
})

app.get('/test',(request, response)=>{
  return response.json({message: 'Test successfully!'})
})

app.listen(3333);

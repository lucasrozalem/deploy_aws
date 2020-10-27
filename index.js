const express = require('express')

const app = express();

app.get('/',(request, response)=>{
  return response.json({message: 'Server is up'})
})

app.get('/atualizou',(request, response)=>{
  return response.json({message: 'Atualizou mesmo!'})
})

app.get('/teste',(request, response)=>{
  const { name, date } = request.body;

  return response.json({name, date})
})

app.listen(3333);

const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')

const clientes = [
  {
    "id": 1,
    "cpf": "215.472.787-57",
    "telefone": "(97) 99143-5111",
    "nome": "Theo Kauê Alexandre Nogueira",
    "logradouro": "Rua Alvaro Maia, 212",
    "CEP": "69445-970"
  },
  {
    "id": 2,
    "cpf": "908.913.052-70",
    "telefone": "(97) 99903-5775",
    "nome": "Jennifer Helena Cardoso",
    "logradouro": "Rua Alvaro Maia, 914",
    "CEP": "69445-970"
  },
  {
    "id": 3,
    "cpf": "955.306.782-46",
    "telefone": "(97) 99582-6912",
    "nome": "Yuri Thales Cardoso",
    "logradouro": "Rua Alvaro Maia, 730",
    "CEP": "69445-970"
  },
  {
    "id": 4,
    "cpf": "570.263.215-01",
    "telefone": "(75) 99145-5117",
    "nome": "Isadora Brenda Kamilly Teixeira",
    "logradouro": "Praça Aquinoel Borges, 355",
    "CEP": "69445-970"
  },
  {
    "id": 5,
    "cpf": "004.936.491-07",
    "telefone": "(67) 98157-5638",
    "nome": "Murilo Mateus Alexandre Porto",
    "logradouro": "Avenida Manoel Murtinho, 1186",
    "CEP": "79210-970"
  }
]
app.use(cors()) 
app.get('/api/v1/clientes', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send(clientes)
})
app.listen(8081)

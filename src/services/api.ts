import axios from 'axios';  

export const api = axios.create({ //criaremos uma instacia para que seja possivel setar informações padrao para todas as requisicoes, caso vamos usar o endereco que se repete em todas as requisicoes.
    baseURL: 'http://localhost:3000/api', //aqui vamos definir as rotas para que sejam chamadas posteriormente
})

//com essa importacao conseguimos acessar diretamente a rota da API sem precisa declarar a toda, dentro dela vamos acessar apenas os dados que vamos utilizar

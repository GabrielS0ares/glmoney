import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  //mirage permite a criação de um BD dentro dele
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 09:00:08'),
        },

        {
          id: 2,
          title: 'aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 2000,
          createdAt: new Date('2022-02-12 19:00:08'),
        }
      ]
    })
  },


  routes(){
    this.namespace = 'api'; //Aqui para abrirmos tudo pela rota de nome API

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const  data = JSON.parse(request.requestBody)
    
      return schema.create('transaction', data) //schema é o banco de dados, 1 parametro para onde vai, 2 parametro quais dados irão
    })
  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
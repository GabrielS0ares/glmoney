Forma de estilização: CSS in JS --> para instalar:

yarn add styled-components

ao usar o axios ja vem por padrao como um json, diferente do fetch que tem que ficar convertendo todas as vezes que a rota é acessada, e com ele fica possivel interceptar a requise e a resposta podendo realizar acoes dependo do retorno que for obtido,

vamos primeiramente instalar o axios, depois podemos configurar um server que vai receber os dados para que seja possivel chamar a API como um variavel, sem a necessidade de ficar definindo ela constantemente. 

e o axios que retorna informacoes alem do body da requisicao que foi realizada, dessa forma conseguimos ter acesso ao httpcode por exemplo para verificar se a requisicao foi realizada com sucesso.

mas o data vem como um dos objetos que consta dentro do response, sem assim conseguimos acessar ele e manipular os dados, dessa forma da para comsumir os dados de dentro da API.

por esse motivo precisamos usar o response.data para ter acesso as dados que foram retornados de dentro da API

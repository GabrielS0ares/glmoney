Forma de estilização: CSS in JS --> para instalar:

yarn add styled-components

ao usar o axios ja vem por padrao como um json, diferente do fetch que tem que ficar convertendo todas as vezes que a rota é acessada, e com ele fica possivel interceptar a requise e a resposta podendo realizar acoes dependo do retorno que for obtido,

vamos primeiramente instalar o axios, depois podemos configurar um server que vai receber os dados para que seja possivel chamar a API como um variavel, sem a necessidade de ficar definindo ela constantemente. 

e o axios que retorna informacoes alem do body da requisicao que foi realizada, dessa forma conseguimos ter acesso ao httpcode por exemplo para verificar se a requisicao foi realizada com sucesso.

mas o data vem como um dos objetos que consta dentro do response, sem assim conseguimos acessar ele e manipular os dados, dessa forma da para comsumir os dados de dentro da API.

por esse motivo precisamos usar o response.data para ter acesso as dados que foram retornados de dentro da API

---------------Aula para criacao do modal---------------

vamos usar as bibliotecas do react para criacao do modal ja que ele vem 90% pronto, explicação de como funciona o modal, ele vem com algumas coisas que eu nao sabia como por exemplo a criacao de algumas funções que antes nao tinham dentro da aplicacao, sendo assim outros exports tambem pode ter scripts que eu ainda nao via, por isso será necessario mudar elas posteriormente.


primeira parte é a criacao de um estado que vai dizer se o modal vai se fechar ou abrir quando acionado o btn, e o primeiro estado dele seá fechado, por que por padrao o modal vem fechado.................Verificar possibilidade de comecar com ele aberto quando a view for carregada assim da para fazer o mesmo esquema da meu tudo.

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState('false'); 

depois do estados vamos setar as funcoes que irão controlar ele sendo assim ficará mais simples a manipulação dele

function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
}

function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
}

Sempre quando tiver uma funcao dentro do codigo que se inicia a partir de uma acao do usuario vamos comecar o nome da variavel com nome handle assim fica mais facil de dar manutencao no codigo.

verificar sempre se a biblioteca que esta sendo usada tem as dependencias necessarias para funcionade dentro do typescrpit, se nao tiver tem que instalar ela, como no exemplo do modal que vem com erro por contas das biliotecas ficarem ausentes dentro dele, comando de exemplo no caso da ausencia das bibliotecas: yarn add @types/react-modal -D

Como importamos o modal de dentro do react components temos que usar como padrao algumas propriedades que sao obrigatorias para o funcionamento do modal, sendo uma delas a que seta para ele se eles esta aberto ou fechado

isOpen={} ela vai receber dentro dela a variavel estado que criamos, ja que essa variavel estado sera controlado no click do button que por sua vez chama a funcao de abrir o modal

outra propriedade que precisamos declarar a que fecha o modal: onRequestClose definido essa propriedade e o que ela vai fazer vamos passar a verificar a questão do componente que esta dentro do variavel.

vamos passar a chama ele externamento por que ele vai ficar dentro do App mas ainda assim eu preciso chamar a funcao de abrir o modal de dentro do App, por que ela nao faz mais parte da view, para isso vamos fazer o seguinte:

naturalmente vamos passar props para ele, e com as props, mas ainda nao entendi como ele vai usar ele por que a funcao que esta sendo chamada para dentro dele nao é uma propriedade

resoluçao:

Como estamos usando type script vamos declarar esses dados dentro do reader que vamos criar um nova propriedade, e como ela esta sendo chamada de dentro do botao ela vai ser colocada como um propriedade do Header, sendo assim essa propriedade precisa receber a funcao que vamos executar, assim da para meio que componentizar o modal, para que ele nao fique poluindo o codigo


sempre que precisar que uma informacao seja compartilhada entre mais de um componente vamos colocar elas juntas dentro 

---------------Aula para criacao do modal---------------

configurando a estrutura do Html dentro do modal

Como modal segue mais ou menos um mesmo padrao recomendasse que seja feito dentro dos estilos globais, assim evitando ter que ficar criando o codigo de estilizacao a cada modal criado

---------------Botoes de entrada e saida de dentro do modal---------------

Altamente personalizado para a aplicação, ja que ele precisaria ser um checkbox, sem ser um checkbox:

sera usado JS para manipulação de cores com o pacote polished, para instalar vamos usar o comando:

yarn add polished

esse pacote tem muitas helpers que servem para modificar as cores 


---------------Aplicando funcionamento ao botoes---------------

Para mostar que o btn está ativo podemos usar uma funcao dentro da classe, da seguinte forma: className={type === 'deposit' ? 'active' : ''} nesse caso estamos usando usando a variavel que muda de estado para determinar se o btn esta ativo ou nao, dessa forma daria para controlar ele pela classe.

mas vamos tranformar o botao em um styled compornte para tratar ele dentro do syled componete, que permite que seja possivel realizar as configurações de estilização de acordo com um propopriendade dentro do componente.

Como vamos determinar a propriedade dentro do btn, ela ainda nao existe por padrao dentro dele, por isso ela retorna um erro, mas isso é tratavel, vamos colocar dentro do arquivo de estilizacao um interface que vai dalar que o btn vai recer uma propost booleana.

Mas ela é definida dentro do arquivo de estilizacao de forma diferente, por que definimos ela com com sinal de maior na mesma linha que essa estilização é exportada

--------------Inserindo dados API---------------

Deixando os dados pre cadastradas no API do mirage, utilizando um funcao chamada seeds

IMPORTANTE

eu posso criar uma classe dentro do global e setar essa classe com um map dentro do componente, assim como está sendo feito no category

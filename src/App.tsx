import styled from 'styled-components'

const Title = styled.h1` //para criar um compontenva vamos usar a primeiro letra maiuscula, e dentro das grazes vamos usar o codigo css puro para estilização
  color: #8257e6;
  font-size: 64px;
`

function App() {
  return (
    <div className="App">
      <Title>Olha ele ae</Title> 
    </div>
  );
}

export default App;

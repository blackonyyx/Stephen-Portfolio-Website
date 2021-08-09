import './App.scss';
import NavBar from './Components/NavBar';
import styled from 'styled-components';

function App() {
  return (
        <AppStyled>
          <h1>
            styled components
          </h1>
        </AppStyled>
    // <div className="App">
    //   <div className="sidebar">
    //     <NavBar/>
    //   </div>
    //   <div className="main-content">

    //   </div>
    // </div>
  );
}
const AppStyled = styled.div`
  background-color: red;
`;

export default App;

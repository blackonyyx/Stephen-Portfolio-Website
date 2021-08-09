import './App.scss';
import NavBar from './Components/SideBar';
import styled from 'styled-components';
import SideBar from './Components/SideBar';

function App() {
  return (
        <AppStyled>
          <div className="App">
            <SideBar />
          </div>
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

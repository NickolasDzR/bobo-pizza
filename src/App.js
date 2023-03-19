import './App.css';
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";
import {Main} from "./components/main/main";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Container>
                <Header/>
                <Main/>
            </Container>
        </div>
    );
}

export default App;

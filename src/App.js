import './App.css';
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";
import {Main} from "./components/main/main";
import {Card} from "./components/card/card";
import data from "./data.json"

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Container>
                <Header/>
                <Main/>
            </Container>
            <Card props={data.products[0]}/>
        </div>
    );
}

export default App;

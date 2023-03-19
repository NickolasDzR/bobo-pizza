import './App.css';
// import Product from "./components/product/product";
// import {PizzaWithToys} from "./assets/images/index"
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Container>
                <Header/>
            </Container>
        </div>
    );
}

export default App;

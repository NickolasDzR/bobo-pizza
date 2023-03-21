import './App.css';
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";
import {Main} from "./components/main/main";
import {observer} from "mobx-react-lite";
import Card from "./components/card/card";

const App = observer(() => {

    return (
        <div className="App">
            <GlobalStyle/>
            <Container>
                <Header/>
                <Main/>
            </Container>
            <Card/>
        </div>
    );
});

export default App;

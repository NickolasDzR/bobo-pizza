import './App.css';
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";
import {Main} from "./components/main/main";
import {Card} from "./components/card/card";
import data from "./data.json"
import {observer} from "mobx-react-lite";
import {eventsStore} from "./utils/store/events";

const App = observer(() => {
    const {windowWidth} = eventsStore;

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
});

export default App;

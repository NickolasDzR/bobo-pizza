import './App.css';
import {GlobalStyle} from "./global/style";
import {Header} from "./components/header/header";
import {Container} from "./global/container";
import {Main} from "./components/main/main";
import {observer} from "mobx-react-lite";
import Card from "./components/card/card";
import {cardStore} from "./utils/store/card";
import {AnimatePresence} from "framer-motion";

const App = observer(() => {
    const {isCardActive} = cardStore;

    return (
        <div className="App">
            <GlobalStyle/>
            <Container>
                <Header/>
                <Main/>
            </Container>
            <AnimatePresence>
                {isCardActive && <Card />}
            </AnimatePresence>
        </div>
    );
});

export default App;
